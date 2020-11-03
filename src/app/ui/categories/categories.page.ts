import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { CRUD } from '../../decorators/mixIns';
import { CategoryService } from './../../service/category/category.service';
import { CategoryPage } from '../../modals/category/category.page';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  category = CRUD(CategoryService);
  categories = new this.category();
  rows = [];
  constructor(public modalController: ModalController) {
    this.categories.find().then((data) => (this.rows = data));
  }
  ngOnInit() {}
  async presentModal(rowData?: any, isEdit?: any, isDelete?: any) {
    const modal = await this.modalController.create({
      component: CategoryPage,
      animated: true,
      componentProps: { getData: rowData, edit: isEdit, delete: isDelete },
    });
    modal.onDidDismiss().then(() => {
      const categoryUpdate = new this.category();
      categoryUpdate.find().then((result) => this.rows = result);
    });
    return await modal.present();
  }
}

