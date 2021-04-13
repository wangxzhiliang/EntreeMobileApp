import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyReservationsPageRoutingModule } from './view-my-reservations-routing.module';

import { ViewMyReservationsPage } from './view-my-reservations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyReservationsPageRoutingModule
  ],
  declarations: [ViewMyReservationsPage]
})
export class ViewMyReservationsPageModule {}
