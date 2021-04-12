import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllRestaurantsPage } from './view-all-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllRestaurantsPageRoutingModule {}
