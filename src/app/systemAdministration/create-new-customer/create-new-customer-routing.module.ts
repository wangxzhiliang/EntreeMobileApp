import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewCustomerPage } from './create-new-customer.page';

const routes: Routes = [
  {
    path: '',
    component: CreateNewCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewCustomerPageRoutingModule {}
