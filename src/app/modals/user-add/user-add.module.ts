import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAddPageRoutingModule } from './user-add-routing.module';

import { UserAddPage } from './user-add.page';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAddPageRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyIonicModule,
  ],
  declarations: [UserAddPage]
})
export class UserAddPageModule {}
