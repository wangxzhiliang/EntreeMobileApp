import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoucherPage } from './voucher.page';

const routes: Routes = [
  {
    path: '',
    component: VoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoucherPageRoutingModule {}
