import { Component, OnInit } from '@angular/core';
import { SaleTransaction } from '../../models/sale-transaction';
import { CustomerService } from '../../services/customer.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-my-transactions',
  templateUrl: './view-my-transactions.page.html',
  styleUrls: ['./view-my-transactions.page.scss'],
})
export class ViewMyTransactionsPage implements OnInit {

  saleTransactions: SaleTransaction[];
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  voucherId: number;

  constructor(private router: Router, 
    private customerService: CustomerService,
    private sessionService: SessionService) {
      this.error = false;
      this.resultSuccess = false;
   }

   ngOnInit() {
    this.updateModel();
  }

  ionViewWillEnter() {
    this.updateModel();
  }

  updateModel() {
    this.customerService.getMyTransactions(this.sessionService.getCurrentCustomer().userId).subscribe(
      response => {
        this.saleTransactions = response;
        // let st = this.saleTransactions;
        // if(this.saleTransactions[1] == null){
        //   this.saleTransactions = st[0];
        // }
        this.resultSuccess = true;
      }, 
      error => {
        this.resultSuccess = false;
        console.log("**********ViewMyVouchers.ts: " + error);
      }
    );
  }

}
