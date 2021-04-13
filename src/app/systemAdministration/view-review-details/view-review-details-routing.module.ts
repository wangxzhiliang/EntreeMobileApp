import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewReviewDetailsPage } from './view-review-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewReviewDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewReviewDetailsPageRoutingModule {}
