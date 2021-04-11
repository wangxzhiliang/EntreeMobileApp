import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VoucherService } from '../services/voucher.service';
import { Voucher } from '../models/voucher';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.page.html',
  styleUrls: ['./voucher.page.scss'],
})
export class VoucherPage implements OnInit {

  vouchers: Voucher[];


  constructor(private router: Router,
    private voucherService: VoucherService) { 
  }

  ngOnInit() {
    this.refreshVouchers();
  }


  refreshVouchers() {
    this.voucherService.getVouchers().subscribe(
      response => {
        this.vouchers = response;
      },
      error => {
        console.log('********* ViewVouchers.ts: ' + error);
      }
    )

  }

}
