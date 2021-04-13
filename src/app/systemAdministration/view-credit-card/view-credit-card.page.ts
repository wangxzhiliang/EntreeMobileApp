import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../../models/creditCard';
import { CreditCardService } from '../../services/creditCard.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-credit-card',
  templateUrl: './view-credit-card.page.html',
  styleUrls: ['./view-credit-card.page.scss'],
})
export class ViewCreditCardPage implements OnInit {

  creditCard: CreditCard | null;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  creditCardId: number;

  constructor(private router: Router, 
    private creditCardService: CreditCardService,
    private sessionService: SessionService,
    public alertController: AlertController) {
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
    this.creditCard = this.sessionService.getCreditCard();
    this.creditCardId = this.sessionService.getCreditCard().creditCardId;
  }

  back() {
    this.router.navigate(["/index"]);
  }

  async deleteCard(cc: CreditCard) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete Card',
      message: 'Confirm delete card <strong>' + cc.cardNumber + '</strong>?',
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
            console.log(cc.creditCardId)
            this.creditCardService.deleteCreditCard(cc.creditCardId).subscribe(
              response => {
                this.resultSuccess = true;
                this.creditCard = null;
              },
              error => {
                this.error = true;
                this.errorMessage = error;
              }
            );
          }
        }
      ]
    });

    await alert.present();    
  }

}
