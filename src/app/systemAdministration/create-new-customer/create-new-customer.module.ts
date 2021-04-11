import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewCustomerPageRoutingModule } from './create-new-customer-routing.module';

import { CreateNewCustomerPage } from './create-new-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewCustomerPageRoutingModule
  ],
  declarations: [CreateNewCustomerPage]
})
export class CreateNewCustomerPageModule {}
