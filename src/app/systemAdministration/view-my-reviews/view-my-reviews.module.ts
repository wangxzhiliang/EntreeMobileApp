import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyReviewsPageRoutingModule } from './view-my-reviews-routing.module';

import { ViewMyReviewsPage } from './view-my-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyReviewsPageRoutingModule
  ],
  declarations: [ViewMyReviewsPage]
})
export class ViewMyReviewsPageModule {}
