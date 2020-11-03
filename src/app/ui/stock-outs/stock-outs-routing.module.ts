import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockOutsPage } from './stock-outs.page';

const routes: Routes = [
  {
    path: '',
    component: StockOutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockOutsPageRoutingModule {}
