import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewReviewPage } from './create-new-review.page';

const routes: Routes = [
  {
    path: '',
    component: CreateNewReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewReviewPageRoutingModule {}
