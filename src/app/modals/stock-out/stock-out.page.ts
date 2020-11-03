import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CRUD } from './../../decorators/mixIns';
import { CustomerService } from '../../service/customer/customer.service';
import { WarehouseService } from '../../service/warehouse/warehouse.service';
import { ItemService } from '../../service/item/item.service';
import { ItemBalanceService } from '../../service/itemBalance/item-balance.service';
import {StockOutService} from '../../service/stockOut/stock-out.service';
import { IonicSelectableModule } from 'ionic-selectable';
import { ModalController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-stock-out',
  templateUrl: './stock-out.page.html',
  styleUrls: ['./stock-out.page.scss'],
})
export class StockOutPage implements OnInit {
  isEdit = false;
  isView = false;
  isDelete = false;
  isRetail = true;
  isListEdit = false;

  vouncher: string;
  stockOuts = CRUD(StockOutService);
  stockOut = new this.stockOuts();
  stockOutDate: string = moment().format();

  customer = CRUD(CustomerService);
  customers = new this.customer();
  allCustomer: CustomerService[];
  selectedCustomer: CustomerService;

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

  itemBalance = CRUD(ItemBalanceService);
  itemBalances = new this.itemBalance();

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  constructor(
    public modalController: ModalController,
    public navParams: NavParams
  ) {
    this.customers.find().then((data) => (this.allCustomer = data));
    this.warehouses.find().then((data) => (this.allWarehouse = data));
    this.items.find().then((data) => this.allItem = data);
    if (this.navParams.get('getData')) {
      this.rows = this.navParams.get('getData').stockOutDetails;
      if (this.navParams.get('getData').customer){
        this.selectedCustomer = this.navParams.get('getData').customer;
        this.isRetail = false;
      }
      this.vouncher = this.navParams.get('getData').vouncher;
      this.payAmount = this.navParams.get('getData').payAmount;
      this.totalAmount = this.navParams.get('getData').grandTotal;
      this.stockOutDate = moment(
        this.navParams.get('getData').stockOutDate
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
  ngOnInit() {
    this.fields = [
      {
        type: 'search',
        key: 'warehouse',
      },
    ];
  }
  ChangeCustomer(event: { component: IonicSelectableModule; value: any }) {
    console.log(this.selectedCustomer);
  }
  ChangeWarehouse(event: { component: IonicSelectableModule; value: any }) {
    this.itemBalances
      .findBy({ key: 'warehouse', value: this.selectedWarehouse })
      .then((data) => this.allItem = data.map((item) => item.get('item')));
      // .then((data) => console.log(data.map((item) => item.get('item'))) );
    this.selectedItem = null;
  }
  ChangeItem(event: { component: IonicSelectableModule; value: any }) {
    if(this.isRetail){
      this.price = this.selectedItem.retail;
    }else{
      this.price = this.selectedItem.wholeSale;
    }
  }
  segmentChanged(ev: any) {
    if (ev.detail.value === 'retail') {
      this.isRetail = true;
      this.selectedCustomer = null;
      if (this.selectedItem){
        this.price = this.selectedItem.retail;
      }
    } else {
      if (this.selectedItem){
        this.price = this.selectedItem.wholeSale;
      }
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
  calculateTotal() {
    this.totalAmount = 0;
    this.rows.map((data) => {
      this.totalAmount += data.total;
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
  add() {
    this.stockOut.stockOutDate = moment(this.stockOutDate).toDate();
    this.stockOut.vouncher = this.vouncher;
    this.stockOut.customer = this.selectedCustomer;
    this.stockOut.stockOutDetails = this.rows;
    this.stockOut.payAmount = this.payAmount;
    this.stockOut.grandTotal = this.totalAmount;
    console.log(this.stockOut);
    this.stockOut.save().then((data) => {
      if (data.id) {
        this.stockOut.id = undefined;
        this.rows = [];
        this.vouncher = '';
        this.stockOutDate = moment().format().toString();
        this.selectedItem = null;
        this.selectedCustomer = null;
        this.selectedWarehouse = null;
        this.totalAmount = 0;
      }
    });
  }
  update() {}
  del() {}
}
