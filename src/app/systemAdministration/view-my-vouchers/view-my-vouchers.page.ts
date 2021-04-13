import { Component, OnInit } from '@angular/core';
import { CustomerVoucher } from '../../models/customer-voucher';
import { CustomerService } from '../../services/customer.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-my-vouchers',
  templateUrl: './view-my-vouchers.page.html',
  styleUrls: ['./view-my-vouchers.page.scss'],
})
export class ViewMyVouchersPage implements OnInit {

  customerVouchers: CustomerVoucher | null;
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
    this.customerService.getMyVouchers(this.sessionService.getCurrentCustomer().userId).subscribe(
      response => {
        this.customerVouchers = response;
        console.log(this.customerVouchers[0].voucher);
        this.resultSuccess = true;
      }, 
      error => {
        this.resultSuccess = false;
        console.log("**********ViewMyVouchers.ts: " + error);
      }
    );
  }

  viewVoucherDetails(voucher) {
    this.router.navigate(["/viewVoucherDetails/" + voucher.customerVoucherId]);
  }
}
