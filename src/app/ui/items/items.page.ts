import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { CRUD } from '../../decorators/mixIns';
import { CategoryService } from './../../service/category/category.service';
import {ItemService} from '../../service/item/item.service';
import { ItemPage } from '../../modals/item/item.page';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  category = CRUD(CategoryService);
  categories = new this.category();
  item = CRUD(ItemService);
  items = new this.item();
  rows = [];
  constructor(public modalController: ModalController) {
    this.items.find().then((data) => (this.rows = data));
    // this.items.getAll('category').then((data) => console.log(data));
  }
  ngOnInit() {}
  async presentModal(rowData?: any, isEdit?: any, isDelete?: any) {
    const modal = await this.modalController.create({
      component: ItemPage,
      animated: true,
      componentProps: { getData: rowData, edit: isEdit, delete: isDelete },
    });
    modal.onDidDismiss().then(() => {
      this.items.find().then((result) => this.rows = result);
    });
    return await modal.present();
  }
  open(row){
    console.log(row);
  }
}
