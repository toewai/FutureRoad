import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockInsPage } from './stock-ins.page';

const routes: Routes = [
  {
    path: '',
    component: StockInsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockInsPageRoutingModule {}
