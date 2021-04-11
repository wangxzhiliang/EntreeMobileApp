import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllRestaurantsPageRoutingModule } from './view-all-restaurants-routing.module';

import { ViewAllRestaurantsPage } from './view-all-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllRestaurantsPageRoutingModule
  ],
  declarations: [ViewAllRestaurantsPage]
})
export class ViewAllRestaurantsPageModule {}
