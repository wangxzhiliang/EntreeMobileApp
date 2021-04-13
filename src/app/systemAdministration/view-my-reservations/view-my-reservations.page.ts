import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { CustomerService } from '../../services/customer.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
  message: string;
  resultingSuccess: boolean;

  constructor(private router: Router, 
    private customerService: CustomerService,
    private sessionService: SessionService,
    public alertController: AlertController) {
      this.error = false;
      this.resultSuccess = false;
      this.resultingSuccess = false;
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
        let res = this.reservations;
          if(this.reservations[1] == null){
            this.reservations = res[0];
          }
        this.resultSuccess = true;
      }, 
      error => {
        this.resultSuccess = false;
        console.log("**********ViewMyReservations.ts: " + error);
      }
      
    );
  }

  async deleteReservation(reservation: Reservation) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete Reservation',
      message: 'Confirm delete reservation at <strong>' + reservation.restaurant.name + '</strong>?',
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
            this.customerService.deleteMyReservation(reservation.reservationId).subscribe(
              response => {
                this.resultingSuccess = true;
                this.message = "Reservation deleted successfully";
              },
              error => {
                this.error = true;
                this.message = "An error has occurred while deleting: " + error;
                this.errorMessage = error;
              }
            );
            this.updateModel();
          }
        }
      ]
    });
    await alert.present();    
  }

}
