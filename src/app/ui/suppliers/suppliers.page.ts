import { Component, OnInit } from '@angular/core';
import { CRUD } from '../../decorators/mixIns';
import { SupplierService } from './../../service/supplier/supplier.service';
import { ModalController } from '@ionic/angular';
import { SupplierPage } from '../../modals/supplier/supplier.page';
@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  styleUrls: ['./suppliers.page.scss'],
})
export class SuppliersPage implements OnInit {
  supplier = CRUD(SupplierService);
  suppliers  = new this.supplier();
  rows = [];
  constructor(public modalController: ModalController) {
    this.suppliers.find().then(data => this.rows = data);
  }

  ngOnInit() {
  }
  async presentModal(rowData?: any, isEdit?: any, isDelete?: any) {
    const modal = await this.modalController.create({
      component: SupplierPage,
      animated: true,
      componentProps: { getData: rowData, edit: isEdit, delete: isDelete },
    });
    modal.onDidDismiss().then(() => {
      const supplierUpdate = new this.supplier();
      supplierUpdate.find().then((result) => this.rows = result);
    });
    return await modal.present();
  }
}
