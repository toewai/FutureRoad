import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StockInsPageRoutingModule } from './stock-ins-routing.module';
import { StockInsPage } from './stock-ins.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockInsPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [StockInsPage]
})
export class StockInsPageModule {}
