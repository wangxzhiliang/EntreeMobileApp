import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../../models/creditCard';
import { CreditCardService } from '../../services/creditCard.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-credit-card',
  templateUrl: './view-credit-card.page.html',
  styleUrls: ['./view-credit-card.page.scss'],
})
export class ViewCreditCardPage implements OnInit {

  creditCard: CreditCard | null;

  constructor(private router: Router, 
    private creditCardService: CreditCardService,
    private sessionService: SessionService) {
   }

  ngOnInit() {
    this.updateModel();
  }

  ionViewWillEnter() {
    this.updateModel();
  }

  updateModel() {
    this.creditCard = this.sessionService.getCreditCard();
  }

}
