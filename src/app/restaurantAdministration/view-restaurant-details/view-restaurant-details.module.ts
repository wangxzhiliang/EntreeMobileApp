import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRestaurantDetailsPageRoutingModule } from './view-restaurant-details-routing.module';

import { ViewRestaurantDetailsPage } from './view-restaurant-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRestaurantDetailsPageRoutingModule
  ],
  declarations: [ViewRestaurantDetailsPage]
})
export class ViewRestaurantDetailsPageModule {}
