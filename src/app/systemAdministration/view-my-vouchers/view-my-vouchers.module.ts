import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyVouchersPageRoutingModule } from './view-my-vouchers-routing.module';

import { ViewMyVouchersPage } from './view-my-vouchers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyVouchersPageRoutingModule
  ],
  declarations: [ViewMyVouchersPage]
})
export class ViewMyVouchersPageModule {}
