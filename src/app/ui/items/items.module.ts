import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemsPageRoutingModule } from './items-routing.module';
import { ItemsPage } from './items.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [ItemsPage]
})
export class ItemsPageModule {}
