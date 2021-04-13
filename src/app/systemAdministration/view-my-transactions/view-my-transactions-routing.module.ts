import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyTransactionsPage } from './view-my-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyTransactionsPageRoutingModule {}
