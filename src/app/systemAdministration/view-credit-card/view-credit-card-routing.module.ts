import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCreditCardPage } from './view-credit-card.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCreditCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCreditCardPageRoutingModule {}
