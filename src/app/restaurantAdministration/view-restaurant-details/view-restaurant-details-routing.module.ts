import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRestaurantDetailsPage } from './view-restaurant-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRestaurantDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRestaurantDetailsPageRoutingModule {}
