import { Component, OnInit } from '@angular/core';
import { CRUD } from '../../decorators/mixIns';
import { StockInService } from './../../service/stockIn/stock-in.service';
import { ModalController } from '@ionic/angular';
import { StockInPage } from '../../modals/stock-in/stock-in.page';
@Component({
  selector: 'app-stock-ins',
  templateUrl: './stock-ins.page.html',
  styleUrls: ['./stock-ins.page.scss'],
})
export class StockInsPage implements OnInit {
  stockin = CRUD(StockInService);
  stockins  = new this.stockin();
  rows = [];
  constructor(public modalController: ModalController) {
    this.stockins.find().then(data => this.rows = data);
  }

  ngOnInit() {
  }
  async presentModal(rowData?: any, isEdit?: any, isDelete?: any) {
    const modal = await this.modalController.create({
      component: StockInPage,
      animated: true,
      cssClass: 'fullscreen',
      componentProps: { getData: rowData, edit: isEdit, delete: isDelete },
    });
    modal.onDidDismiss().then(() => {
      const stockInUpdate = new this.stockin();
      stockInUpdate.find().then((result) => this.rows = result);
    });
    return await modal.present();
  }
}

