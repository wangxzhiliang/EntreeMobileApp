import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCreditCardPageRoutingModule } from './view-credit-card-routing.module';

import { ViewCreditCardPage } from './view-credit-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCreditCardPageRoutingModule
  ],
  declarations: [ViewCreditCardPage]
})
export class ViewCreditCardPageModule {}
