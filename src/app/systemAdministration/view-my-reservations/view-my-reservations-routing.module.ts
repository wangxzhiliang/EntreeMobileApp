import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyReservationsPage } from './view-my-reservations.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyReservationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyReservationsPageRoutingModule {}
