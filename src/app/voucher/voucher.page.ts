import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { VoucherService } from '../services/voucher.service';
import { Voucher } from '../models/voucher';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.page.html',
  styleUrls: ['./voucher.page.scss'],
})
export class VoucherPage implements OnInit {

  vouchers: Voucher[];


  constructor(private router: Router,
    private voucherService: VoucherService,
    private sessionService: SessionService,
    public alertController: AlertController) { 
  }

  ngOnInit() {
    this.refreshVouchers();
  }

  async checkoutVocher(event, voucher) {
    if(this.sessionService.getIsLogin()) {
      this.router.navigate(["/checkoutVoucher/" + voucher.voucherId]);
    }
    else {

      const alert = await this.alertController.create({
        header: 'Login to Continue',
        message: 'Are you sure you want to login?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
  
            }
          }, {
            text: 'Okay',
            handler: () => {
              this.router.navigate(["/login"]);
            }
          }
        ]
      });
  
      await alert.present();  
      
    }
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
