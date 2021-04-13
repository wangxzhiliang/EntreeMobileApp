import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyTransactionsPageRoutingModule } from './view-my-transactions-routing.module';

import { ViewMyTransactionsPage } from './view-my-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyTransactionsPageRoutingModule
  ],
  declarations: [ViewMyTransactionsPage]
})
export class ViewMyTransactionsPageModule {}
