import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CRUD } from './../../decorators/mixIns';
import { CustomerService } from './../../service/customer/customer.service';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  isEdit = false;
  isView = false;
  isDelete = false;
  constructor(
    public modalController: ModalController,
    public navParams: NavParams
  ) {
    if (this.navParams.get('getData')) {
      this.model = this.navParams.get('getData');
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
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
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
            name: 'person',
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
            name: 'business',
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
            name: 'card',
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
            name: 'call',
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
            name: 'location',
          },
          labelPosition: 'floating',
          required: false,
        },
      },
      {
        key: 'credit',
        type: 'input',
        wrappers: ['iconWrapper'],
        defaultValue: 0,
        templateOptions: {
          type: 'number',
          label: 'Credit',
          icon: {
            slot: 'start',
            name: 'cash',
          },
          labelPosition: 'floating',
          required: true,
          disabled: this.model.credit >= 0,
        },
      },
    ];
  }
  close() {
    this.modalController.dismiss();
  }
  add() {
    if (this.form.valid) {
      const customer = CRUD(CustomerService);
      const addCustomer = new customer();
      addCustomer.name = this.form.get('name').value;
      addCustomer.companyName = this.form.get('companyName').value;
      addCustomer.nrcno = this.form.get('nrcno').value;
      addCustomer.phone = this.form.get('phone').value;
      addCustomer.address = this.form.get('address').value;
      addCustomer.credit = this.form.get('credit').value;
      addCustomer.create().then(() => {
        this.form.reset();
      });
    }
  }
  update() {
    this.model.save().then(() => this.close());
  }
  del() {
    this.model.destroy().then(() => this.close());
  }
}
