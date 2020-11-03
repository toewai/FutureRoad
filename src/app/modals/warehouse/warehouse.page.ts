import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { CRUD } from './../../decorators/mixIns';
import { WarehouseService } from './../../service/warehouse/warehouse.service';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.page.html',
  styleUrls: ['./warehouse.page.scss'],
})
export class WarehousePage implements OnInit {
  isEdit = false;
  isView = false;
  isDelete = false;
  constructor(public modalController: ModalController, public navParams: NavParams) {
    if (this.navParams.get('getData')){
      this.model = this.navParams.get('getData');
      if (this.navParams.get('edit')){
        this.isEdit = this.navParams.get('edit');
      }else{
        this.isView = true;
      }
      if (this.navParams.get('delete')){
        this.isDelete = true;
      }
    }
  }
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      wrappers: ['iconWrapper'],
      templateOptions: {
        label: 'Name',
        labelPosition: 'floating',
        icon: {
          slot: 'start',
          name: 'home',
        },
        required: true,
      },
    },
    {
      key: 'location',
      type: 'textarea',
      wrappers: ['iconWrapper'],
      templateOptions: {
        label: 'Location',
        rows: 5,
        labelPosition: 'floating',
        icon: {
          slot: 'start',
          name: 'location',
        },
        required: true,
      },
    },
  ];
  ngOnInit() {
  }
  close(){
    this.modalController.dismiss();
  }
  add(){
    const warehouse = CRUD(WarehouseService);
    const addWarehouse = new warehouse();
    addWarehouse.name = this.form.get('name').value;
    addWarehouse.location = this.form.get('location').value;
    addWarehouse.create();
  }
  update(){
    this.model.save().then(() => this.close());
  }
  del(){
    this.model.destroy().then(() => this.close() );
  }
}
