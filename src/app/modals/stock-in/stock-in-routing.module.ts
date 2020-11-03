import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockInPage } from './stock-in.page';

const routes: Routes = [
  {
    path: '',
    component: StockInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockInPageRoutingModule {}
