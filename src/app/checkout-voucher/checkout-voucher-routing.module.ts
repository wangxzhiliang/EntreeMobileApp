import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutVoucherPage } from './checkout-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutVoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutVoucherPageRoutingModule {}
