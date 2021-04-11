import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherPageRoutingModule } from './voucher-routing.module';

import { VoucherPage } from './voucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherPageRoutingModule
  ],
  declarations: [VoucherPage]
})
export class VoucherPageModule {}
