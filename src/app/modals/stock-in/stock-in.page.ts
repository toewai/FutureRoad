import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CRUD } from './../../decorators/mixIns';
import { SupplierService } from '../../service/supplier/supplier.service';
import { WarehouseService } from '../../service/warehouse/warehouse.service';
import { ItemService } from '../../service/item/item.service';
import { StockInService } from '../../service/stockIn/stock-in.service';
import { IonicSelectableModule } from 'ionic-selectable';
import { ModalController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.page.html',
  styleUrls: ['./stock-in.page.scss'],
})
export class StockInPage implements OnInit {
  isEdit = false;
  isView = false;
  isDelete = false;
  isRetail = true;
  isListEdit = false;

  vouncher: string;
  stockins = CRUD(StockInService);
  stockin = new this.stockins();
  stockInDate: string = moment().format();
  supplier = CRUD(SupplierService);
  suppliers = new this.supplier();
  allSupplier: SupplierService[];
  selectedSupplier: SupplierService;

  price = 0;
  amount = 0;
  payAmount = 0;
  totalAmount = 0;
  rows = [];

  warehouse = CRUD(WarehouseService);
  warehouses = new this.warehouse();
  allWarehouse: WarehouseService[];
  selectedWarehouse: WarehouseService;

  item = CRUD(ItemService);
  items = new this.item();
  allItem: ItemService[];
  selectedItem: ItemService;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  constructor(
    public modalController: ModalController,
    public navParams: NavParams
  ) {
    this.suppliers.find().then((data) => (this.allSupplier = data));
    this.warehouses.find().then((data) => (this.allWarehouse = data));
    this.items.find().then((data) => (this.allItem = data));

    if (this.navParams.get('getData')) {
      this.rows = this.navParams.get('getData').stockInDetails;
      this.selectedSupplier = this.navParams.get('getData').supplier;
      this.vouncher = this.navParams.get('getData').vouncher;
      this.payAmount = this.navParams.get('getData').payAmount;
      this.totalAmount = this.navParams.get('getData').grandTotal;
      this.stockInDate = moment(
        this.navParams.get('getData').stockInDate
      ).toString();

      if (this.navParams.get('edit')) {
        this.isEdit = this.navParams.get('edit');
      } else {
        this.isView = true;
      }
      if (this.navParams.get('delete')) {
        this.isDelete = true;
      }
    }
  }
  ngOnInit() {}
  ChangeSupplier(event: { component: IonicSelectableModule; value: any }) {
    // console.log(this.selectedSupplier);
  }
  ChangeWarehouse(event: { component: IonicSelectableModule; value: any }) {
    // console.log(this.selectedWarehouse);
  }
  ChangeItem(event: { component: IonicSelectableModule; value: any }) {
    // console.log(this.selectedItem);
  }
  segmentChanged(ev: any) {
    if (ev.detail.value === 'retail') {
      this.isRetail = true;
    } else {
      this.isRetail = false;
    }
  }
  close() {
    this.modalController.dismiss();
  }
  async addCart() {
    const ret = await this.addRow();
    if (ret === 'Finish') {
      this.selectedItem = null;
      this.amount = 0;
      this.price = 0;
    }
    this.isListEdit = false;
  }
  addRow(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if (
          this.rows.filter((item) => item.item.id === this.selectedItem.id)
            .length > 0
        ) {
          if (this.isListEdit === true) {
            this.rows.filter((value, index) => {
              if (value.item.id === this.selectedItem.id) {
                (this.rows[index].warehouse = this.selectedWarehouse),
                  (this.rows[index].amount = this.amount);
                this.rows[index].price = this.price;
                this.rows[index].total =
                  this.rows[index].amount * this.rows[index].price;
                this.rows = [...this.rows];
                this.isListEdit = false;
                this.calculateTotal();
                resolve('Finish');
              }
            });
          } else {
            this.rows.filter((value, index) => {
              if (value.item.id === this.selectedItem.id) {
                (this.rows[index].warehouse = this.selectedWarehouse),
                  (this.rows[index].amount += this.amount);
                this.rows[index].price = this.price;
                this.rows[index].total =
                  this.rows[index].amount * this.rows[index].price;
                this.rows = [...this.rows];
                this.calculateTotal();
                resolve('Finish');
              }
            });
          }
        } else {
          this.rows.push({
            no: this.rows.length + 1,
            warehouseID: this.selectedWarehouse.id,
            warehouse: this.selectedWarehouse,
            item: this.selectedItem,
            amount: this.amount,
            price: this.price,
            total: this.amount * this.price,
          });
          this.rows = [...this.rows];
          this.totalAmount += this.rows[this.rows.length - 1].total;
          resolve('Finish');
        }
      } catch (error) {
        reject('Fail');
      }
    });
  }
  viewRow(row: any) {
    this.selectedItem = row.item;
    this.selectedWarehouse = row.warehouse;
    this.amount = row.amount;
    this.price = row.price;
    this.isListEdit = true;
  }
  delRow(row: any) {
    this.rows.filter((val, index) => {
      if (val.no === row.no) {
        this.rows.splice(index, 1);
        this.rows.map((eachRow, ind) => {
          eachRow.no = ++ind;
        });
        this.rows = [...this.rows];
      }
    });
    this.calculateTotal();
  }
  save() {
    // let stockindate = moment(this.stockInDate);
    this.stockin.stockInDate = moment(this.stockInDate).toDate();
    this.stockin.vouncher = this.vouncher;
    this.stockin.supplier = this.selectedSupplier;
    this.stockin.stockInDetails = this.rows;
    this.stockin.payAmount = this.payAmount;
    this.stockin.grandTotal = this.totalAmount;
    console.log(this.stockin);
    this.stockin.save().then((data) => {
      if (data.id) {
        this.stockin.id = undefined;
        this.rows = [];
        this.vouncher = '';
        this.stockInDate = moment().format().toString();
        this.selectedItem = null;
        this.selectedSupplier = null;
        this.selectedWarehouse = null;
        this.totalAmount = 0;
      }
    });
  }
  del() {
    const stockInService = CRUD(StockInService);
    const stockIn = new stockInService();
    stockIn.id = this.navParams.get('getData').id;
    stockIn.destroy().then(() => this.close());
  }
  update() {
    this.stockin.stockInDate = moment(this.stockInDate).toDate();
    this.stockin.id = this.navParams.get('getData').id;
    this.stockin.vouncher = this.vouncher;
    this.stockin.supplier = this.selectedSupplier;
    this.stockin.stockInDetails = this.rows;
    this.stockin.payAmount = this.payAmount;
    this.stockin.grandTotal = this.totalAmount;
    this.stockin.save().then((data) => {
      this.rows = [];
      this.selectedItem = null;
      this.selectedSupplier = null;
      this.selectedWarehouse = null;
      this.close();
    });
  }
  calculateTotal() {
    this.totalAmount = 0;
    this.rows.map((data) => {
      this.totalAmount += data.total;
    });
  }
}
