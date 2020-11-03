import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CRUD } from './../../decorators/mixIns';
import { CategoryService } from './../../service/category/category.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
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
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      wrappers: ['iconWrapper'],
      templateOptions: {
        label: 'Name',
        icon: {
          slot: 'start',
          name: 'list',
        },
        labelPosition: 'floating',
        required: true,
      },
    },
  ];
  ngOnInit() {}
  close() {
    this.modalController.dismiss();
  }
  add() {
    const category = CRUD(CategoryService);
    const addCategory = new category();
    addCategory.name = this.form.get('name').value;
    addCategory.create().then(() => {
      this.form.reset();
    });
  }
  update() {
    this.model.save().then(() => this.close());
  }
  del() {
    this.model.destroy().then(() => this.close());
  }
}
