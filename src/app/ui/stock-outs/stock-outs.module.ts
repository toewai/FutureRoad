import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StockOutsPageRoutingModule } from './stock-outs-routing.module';
import { StockOutsPage } from './stock-outs.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockOutsPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [StockOutsPage]
})
export class StockOutsPageModule {}
