import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { VoucherService } from '../services/voucher.service';
import { SessionService } from '../services/session.service';
import { Voucher } from '../models/voucher';

@Component({
  selector: 'app-checkout-voucher',
  templateUrl: './checkout-voucher.page.html',
  styleUrls: ['./checkout-voucher.page.scss'],
})

export class CheckoutVoucherPage implements OnInit {

  voucherToView: Voucher
  voucherId: number;

  retrieveVoucherError: boolean;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean; //use to check if checkout successful

  constructor(private router: Router,
    private voucherService: VoucherService,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    private sessionService: SessionService) { 
      this.retrieveVoucherError = false;
      this.error = false;
      this.resultSuccess = false;
    }

  ngOnInit() {
    this.voucherId = parseInt(this.activatedRoute.snapshot.paramMap.get('voucherId'));
    this.refreshVoucher();
  }

  ionViewWillEnter() {
    this.refreshVoucher();
  }

  refreshVoucher() {
    this.voucherService.getVoucherById(this.voucherId).subscribe(
      response => {
        this.voucherToView = response;
      },
      error => {
        this.retrieveVoucherError = true;
        console.log('********** CheckoutVoucher.ts: ' + error);
      }
    )
  }
}
