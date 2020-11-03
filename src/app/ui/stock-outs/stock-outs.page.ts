import { Component, OnInit } from '@angular/core';
import { CRUD } from '../../decorators/mixIns';
import { StockOutService } from './../../service/stockOut/stock-out.service';
import { ModalController } from '@ionic/angular';
import { StockOutPage } from '../../modals/stock-out/stock-out.page';
@Component({
  selector: 'app-stock-outs',
  templateUrl: './stock-outs.page.html',
  styleUrls: ['./stock-outs.page.scss'],
})
export class StockOutsPage implements OnInit {
  stockout = CRUD(StockOutService);
  stockouts  = new this.stockout();
  rows = [];
  constructor(public modalController: ModalController) {
    this.stockouts.find().then(data => this.rows = data);
  }

  ngOnInit() {
  }
  async presentModal(rowData?: any, isEdit?: any, isDelete?: any) {
    const modal = await this.modalController.create({
      component: StockOutPage,
      animated: true,
      componentProps: { getData: rowData, edit: isEdit, delete: isDelete },
    });
    modal.onDidDismiss().then(() => {
      const stockOutUpdate = new this.stockout();
      stockOutUpdate.find().then((result) => this.rows = result);
    });
    return await modal.present();
  }
}
