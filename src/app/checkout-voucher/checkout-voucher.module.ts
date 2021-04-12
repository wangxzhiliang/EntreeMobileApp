import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutVoucherPageRoutingModule } from './checkout-voucher-routing.module';

import { CheckoutVoucherPage } from './checkout-voucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutVoucherPageRoutingModule
  ],
  declarations: [CheckoutVoucherPage]
})
export class CheckoutVoucherPageModule {}
