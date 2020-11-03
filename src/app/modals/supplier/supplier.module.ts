import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupplierPageRoutingModule } from './supplier-routing.module';
import { SupplierPage } from './supplier.page';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierPageRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyIonicModule,
  ],
  declarations: [SupplierPage]
})
export class SupplierPageModule {}
