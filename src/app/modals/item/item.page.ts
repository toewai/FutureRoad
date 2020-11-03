import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { CRUD } from './../../decorators/mixIns';
import { CategoryService } from './../../service/category/category.service';
import { ItemService } from './../../service/item/item.service';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  isEdit = false;
  isView = false;
  isDelete = false;
  category = CRUD(CategoryService);
  categories = new this.category();
  constructor(public modalController: ModalController, public navParams: NavParams) {
    if (this.navParams.get('getData')){
      this.model.name = this.navParams.get('getData').name;
      this.model.category = this.navParams.get('getData').category.id;
      this.model.retail = this.navParams.get('getData').retail;
      this.model.wholeSale = this.navParams.get('getData').wholeSale;
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
  fields: FormlyFieldConfig[];
  ngOnInit() {
    this.categories.find().then( (data) => {
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
              name: 'document-text',
            },
            required: true,
          },
        },
        {
          key: 'category',
          type: 'select',
          wrappers: ['iconWrapper'],
          templateOptions: {
            label: 'Category',
            labelPosition: 'floating',
            icon: {
              slot: 'start',
              name: 'list',
            },
            options: data,
            valueProp: 'id',
            labelProp: 'name',
          },
        },
        {
          key: 'retail',
          type: 'input',
          wrappers: ['iconWrapper'],
          templateOptions: {
            type: 'number',
            label: 'Retail',
            labelPosition: 'floating',
            icon: {
              slot: 'start',
              name: 'contract',
            },
            required: false,
          },
        },
        {
          key: 'wholeSale',
          type: 'input',
          wrappers: ['iconWrapper'],
          templateOptions: {
            type: 'number',
            label: 'Wholesale',
            labelPosition: 'floating',
            icon: {
              slot: 'start',
              name: 'expand',
            },
            required: false,
          },
        }
      ];
    });
  }
  close(){
    this.modalController.dismiss();
  }
  add(){
    const category = CRUD(CategoryService);
    const addCategory = new category();
    addCategory.id = this.form.get('category').value;
    const item = CRUD(ItemService);
    const addItem = new item();
    addItem.name = this.form.get('name').value;
    addItem.category = addCategory;
    addItem.retail = this.form.get('retail').value;
    addItem.wholeSale = this.form.get('wholeSale').value;
    addItem.create().then(() => {
      this.form.reset();
    });
  }
  update(){
    const item = CRUD(ItemService);
    const addItem = new item();
    addItem.id = this.navParams.get('getData').id;
    const category = CRUD(CategoryService);
    const addCategory = new category();
    addCategory.id = this.model.category;
    addItem.name = this.form.get('name').value;
    addItem.category = addCategory;
    addItem.retail = this.form.get('retail').value;
    addItem.wholeSale = this.form.get('wholeSale').value;
    addItem.save().then(() => this.close());
    // this.model.save().then(() => this.close());
  }
  del(){
    const item = CRUD(ItemService);
    const addItem = new item();
    addItem.id = this.navParams.get('getData').id;
    addItem.destroy().then(() => this.close() );
  }
}

