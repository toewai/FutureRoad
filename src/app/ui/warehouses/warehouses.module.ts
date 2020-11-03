import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WarehousesPageRoutingModule } from './warehouses-routing.module';
import { WarehousesPage } from './warehouses.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarehousesPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [WarehousesPage]
})
export class WarehousesPageModule {}
