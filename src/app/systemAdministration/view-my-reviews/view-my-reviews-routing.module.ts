import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyReviewsPage } from './view-my-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyReviewsPageRoutingModule {}
