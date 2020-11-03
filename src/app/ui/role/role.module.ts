/* cSpell:disable */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RolePageRoutingModule } from './role-routing.module';
import { RolePage } from './role.page';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolePageRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyIonicModule,
  ],
  declarations: [RolePage]
})
export class RolePageModule {

}
