import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerVoucher } from '../../models/customer-voucher';
import { ActivatedRoute, Router } from '@angular/router';
import Big from 'big.js';

@Component({
  selector: 'app-view-voucher-details',
  templateUrl: './view-voucher-details.page.html',
  styleUrls: ['./view-voucher-details.page.scss'],
})
export class ViewVoucherDetailsPage implements OnInit {

  customerVoucherId: number;
  customerVoucherToView: CustomerVoucher;
  retrieveVoucherError: boolean;

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,) { 
    this.retrieveVoucherError = false;
  }

  ngOnInit() {
    this.customerVoucherId = parseInt(this.activatedRoute.snapshot.paramMap.get('customerVoucherId'));
    this.refreshRestaurant();
  }

  ionViewWillEnter() {
    this.refreshRestaurant();
  }

  refreshRestaurant() {
    this.customerService.getVoucherByVoucherId(this.customerVoucherId).subscribe(
      response => {
        this.customerVoucherToView = response;
        console.log(this.customerVoucherToView[0].voucher.amountRedeemable)
        this.retrieveVoucherError = false;
      },
      error => {
        this.retrieveVoucherError = true;
        console.log('********** ViewCustomerVoucherDetailsPage.ts: ' + error);
      }
    );
  }

back() {
    this.router.navigate(["/viewMyVouchers"]);
  }

}
