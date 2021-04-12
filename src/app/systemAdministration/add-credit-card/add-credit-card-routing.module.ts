import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCreditCardPage } from './add-credit-card.page';

const routes: Routes = [
  {
    path: '',
    component: AddCreditCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCreditCardPageRoutingModule {}
