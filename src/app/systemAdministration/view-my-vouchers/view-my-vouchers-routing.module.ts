import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyVouchersPage } from './view-my-vouchers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyVouchersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyVouchersPageRoutingModule {}
