import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CustomerPageRoutingModule } from './customer-routing.module';
import { CustomerPage } from './customer.page';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerPageRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyIonicModule,
  ],
  declarations: [CustomerPage]
})
export class CustomerPageModule {}
