import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CreditCardService } from '../../services/creditCard.service';
import { CreditCard } from '../../models/credit-Card';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.page.html',
  styleUrls: ['./add-credit-card.page.scss'],
})
export class AddCreditCardPage implements OnInit {

  submitted: boolean;
  newCreditCard: CreditCard;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private creditCardService: CreditCardService,
    private sessionService: SessionService) {
    this.submitted = false;
    this.newCreditCard = new CreditCard();

    this.resultSuccess = false;
    this.resultError = false;
  }


  ngOnInit() {
  }



  clear() {
    this.submitted = false;
    this.newCreditCard = new CreditCard();
  }

  create(createCreditCardForm: NgForm) {

    this.submitted = true;

    if (createCreditCardForm.valid) {
      this.creditCardService.createNewCreditCard(this.newCreditCard).subscribe(
        response => {
          let newCreditCardId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Card with number: " + this.newCreditCard.cardNumber + " addded successfully";
          this.newCreditCard.creditCardId = newCreditCardId;
          // this.newCreditCard.deleted = false;
          this.sessionService.setHasCreditCard(true);
          this.sessionService.setCreditCard(this.newCreditCard);
          this.sessionService.setCreditCardId(this.newCreditCard.creditCardId);
          console.log(newCreditCardId);
          this.newCreditCard = new CreditCard();
          this.submitted = false;
          createCreditCardForm.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new credit card: " + error;

          console.log('********** CreateNewCreditCardPage.ts: ' + error);
        }
      );
    }
  }

  back() {
		this.router.navigate(["/index"]);
	}

  viewCreditCard(){
    this.router.navigate(["/viewCreditCard"]);
  }

}
