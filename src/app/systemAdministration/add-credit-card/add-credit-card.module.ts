import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCreditCardPageRoutingModule } from './add-credit-card-routing.module';

import { AddCreditCardPage } from './add-credit-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCreditCardPageRoutingModule
  ],
  declarations: [AddCreditCardPage]
})
export class AddCreditCardPageModule {}
