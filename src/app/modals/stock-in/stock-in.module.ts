import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockInPageRoutingModule } from './stock-in-routing.module';

import { StockInPage } from './stock-in.page';
import {IonicSelectableModule} from 'ionic-selectable';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockInPageRoutingModule,
    IonicSelectableModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(
    ),
    FormlyIonicModule,
    NgxDatatableModule,
  ],
  declarations: [StockInPage]
})
export class StockInPageModule {}
