import { Component, OnInit } from '@angular/core';
import { CRUD } from '../../decorators/mixIns';
import { CustomerService } from './../../service/customer/customer.service';
import { ModalController } from '@ionic/angular';
import { CustomerPage } from '../../modals/customer/customer.page';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customer = CRUD(CustomerService);
  customers  = new this.customer();
  rows = [];
  constructor(public modalController: ModalController) {
    this.customers.find().then(data => this.rows = data);
  }

  ngOnInit() {
  }
  async presentModal(rowData?: any, isEdit?: any, isDelete?: any) {
    const modal = await this.modalController.create({
      component: CustomerPage,
      animated: true,
      componentProps: { getData: rowData, edit: isEdit, delete: isDelete },
    });
    modal.onDidDismiss().then(() => {
      const customerUpdate = new this.customer();
      customerUpdate.find().then((result) => this.rows = result);
    });
    return await modal.present();
  }
}
