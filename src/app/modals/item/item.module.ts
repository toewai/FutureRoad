import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemPageRoutingModule } from './item-routing.module';
import { ItemPage } from './item.page';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPageRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyIonicModule,
  ],
  declarations: [ItemPage]
})
export class ItemPageModule {}
