import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewReviewDetailsPageRoutingModule } from './view-review-details-routing.module';

import { ViewReviewDetailsPage } from './view-review-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewReviewDetailsPageRoutingModule
  ],
  declarations: [ViewReviewDetailsPage]
})
export class ViewReviewDetailsPageModule {}
