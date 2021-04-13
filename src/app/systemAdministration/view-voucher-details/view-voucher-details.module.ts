import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVoucherDetailsPageRoutingModule } from './view-voucher-details-routing.module';

import { ViewVoucherDetailsPage } from './view-voucher-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVoucherDetailsPageRoutingModule
  ],
  declarations: [ViewVoucherDetailsPage]
})
export class ViewVoucherDetailsPageModule {}
