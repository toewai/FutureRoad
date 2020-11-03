import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CRUD } from './../../decorators/mixIns';
import { SupplierService } from './../../service/supplier/supplier.service';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.page.html',
  styleUrls: ['./supplier.page.scss'],
})
export class SupplierPage implements OnInit {
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
  fields: FormlyFieldConfig[]
  ngOnInit() {
    this.fields = [
      {
        key: 'name',
        type: 'input',
        wrappers: ['iconWrapper'],
        templateOptions: {
          label: 'Name',
          labelPosition: 'floating',
          icon: {
            slot: 'start',
            name: 'person'
          },
          required: true,
        },
      },
      {
        key: 'companyName',
        type: 'input',
        wrappers: ['iconWrapper'],
        templateOptions: {
          type: 'text',
          label: 'Company Name',
          icon: {
            slot: 'start',
            name: 'business'
          },
          labelPosition: 'floating',
          required: false,
        },
      },
      {
        key: 'nrcno',
        type: 'input',
        wrappers: ['iconWrapper'],
        templateOptions: {
          type: 'text',
          label: 'NRC NO',
          icon: {
            slot: 'start',
            name: 'card'
          },
          labelPosition: 'floating',
          required: false,
        },
      },
      {
        key: 'phone',
        type: 'input',
        wrappers: ['iconWrapper'],
        templateOptions: {
          type: 'number',
          label: 'Phone',
          icon: {
            slot: 'start',
            name: 'call'
          },
          labelPosition: 'floating',
          required: false,
        },
      },
      {
        key: 'address',
        type: 'textarea',
        wrappers: ['iconWrapper'],
        templateOptions: {
          rows: 5,
          label: 'Address',
          icon: {
            slot: 'start',
            name: 'location'
          },
          labelPosition: 'floating',
          required: false,
        },
      },
      {
        key: 'debit',
        type: 'input',
        wrappers: ['iconWrapper'],
        defaultValue: 0,
        templateOptions: {
          type: 'number',
          label: 'Debit',
          icon: {
            slot: 'start',
            name: 'cash',
            color: 'blue',
          },
          labelPosition: 'floating',
          required: true,
          disabled: this.model.debit >= 0,
        },
      },
    ];
  }
  close(){
    this.modalController.dismiss();
  }
  add(){
    const supplier = CRUD(SupplierService);
    const addSupplier = new supplier();
    addSupplier.name = this.form.get('name').value;
    addSupplier.companyName = this.form.get('companyName').value;
    addSupplier.nrcno = this.form.get('nrcno').value;
    addSupplier.phone = this.form.get('phone').value;
    addSupplier.address = this.form.get('address').value;
    addSupplier.credit = this.form.get('credit').value;
    addSupplier.create().then(() => {
      this.form.reset();
    });
  }
  update(){
    this.model.save().then(() => this.close());
  }
  del(){
    this.model.destroy().then(() => this.close() );
  }
}
