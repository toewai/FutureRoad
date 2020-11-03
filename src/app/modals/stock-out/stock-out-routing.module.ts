import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockOutPage } from './stock-out.page';

const routes: Routes = [
  {
    path: '',
    component: StockOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockOutPageRoutingModule {}
