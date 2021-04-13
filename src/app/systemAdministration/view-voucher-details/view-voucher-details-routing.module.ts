import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewVoucherDetailsPage } from './view-voucher-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewVoucherDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewVoucherDetailsPageRoutingModule {}
