import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewReservationPageRoutingModule } from './create-new-reservation-routing.module';

import { CreateNewReservationPage } from './create-new-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewReservationPageRoutingModule
  ],
  declarations: [CreateNewReservationPage]
})
export class CreateNewReservationPageModule {}
