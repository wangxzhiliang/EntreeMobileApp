import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { CustomerService } from '../../services/customer.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-my-reservations',
  templateUrl: './view-my-reservations.page.html',
  styleUrls: ['./view-my-reservations.page.scss'],
})
export class ViewMyReservationsPage implements OnInit {

  reservations: Reservation | null;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  creditCardId: number;

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
    this.customerService.getMyReservations(this.sessionService.getCurrentCustomer().userId).subscribe(
      response => {
        this.reservations = response;
        console.log(this.reservations);
        this.resultSuccess = true;
      }, 
      error => {
        this.resultSuccess = false;
        console.log("**********ViewMyReservations.ts: " + error);
      }
      
    );
  }

}
