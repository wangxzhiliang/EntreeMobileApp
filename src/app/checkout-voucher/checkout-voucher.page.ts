import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AlertController } from '@ionic/angular';

import { VoucherService } from '../services/voucher.service';
import { SessionService } from '../services/session.service';
import { CreditCardService } from '../services/creditCard.service';
import { Voucher } from '../models/voucher';
import { CreditCard } from '../models/credit-card';

@Component({
  selector: 'app-checkout-voucher',
  templateUrl: './checkout-voucher.page.html',
  styleUrls: ['./checkout-voucher.page.scss'],
})

export class CheckoutVoucherPage implements OnInit {

  voucherToView: Voucher
  voucherId: number;
  validDate: Date;
  creditCard: CreditCard;
  cvv: string;

  submitted = false;
  retrieveVoucherError: boolean;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean; //use to check if checkout successful

  constructor(private router: Router,
    private voucherService: VoucherService,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    private sessionService: SessionService,
    private creditcardService: CreditCardService) { 
      this.retrieveVoucherError = false;
      this.error = false;
      this.resultSuccess = false;
      this.submitted = false;
    }

  ngOnInit() {
    this.voucherId = parseInt(this.activatedRoute.snapshot.paramMap.get('voucherId'));
    this.refreshVoucher();
    this.refreshCreditCard();
    console.log("Credit Card ID: " + this.sessionService.getCreditCardId());
    // this.validDate = this.sessionService.getCreditCard().expiryDate;
    


    
    // this.validDate = this.sessionService.getCreditCard().expiryDate.toISOString();
  }

  ionViewWillEnter() {
    this.refreshVoucher();
    this.refreshCreditCard();
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

  refreshCreditCard() {
    this.creditcardService.viewCreditCardDetailsBycreditCardId().subscribe(
      response => {
        this.creditCard = response;
        console.log("credit card numbe: " + this.voucherToView.expiryDate);
        console.log(this.creditCard.cvv );
      },
      error => {
        this.retrieveVoucherError = true;
        console.log('********** CheckoutVoucher.ts: ' + error);
      }
    )
  }

  async confirmCheckout(submitCvvForm: NgForm) {
    this.submitted = true;
    console.log("")

    if(submitCvvForm.valid) {
      const alert = await this.alertController.create({
        header: 'Confirm Checkout',
        message: 'Are you sure you want to puchase this voucher?',
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
              // this.router.navigate(["/login"]);
              if(this.creditCard.cvv == this.cvv) {
                console.log("Buy!!");
              }
              else {
                this.errorAlert();
                console.log("something went wrong");
              }
            }
          }
        ]
      });
  
      await alert.present();  
    }

      
      
    }

    async errorAlert() {
      const alert = await this.alertController.create({
        header: 'Payment Failed',
        message: 'Inlivad cvv entered! Please try again.',
        buttons: ['OK']
      });
      await alert.present(); 
    }


  back() {
    this.router.navigate(["/voucher"]);
  }
}
