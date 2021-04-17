import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';
import { Reservation } from '../../models/reservation';
import { TableConfiguration } from 'src/app/models/table-configuration';
import { TableSize } from 'src/app/models/table-size.enum';
import { SessionService } from 'src/app/services/session.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-new-reservation',
  templateUrl: './create-new-reservation.page.html',
  styleUrls: ['./create-new-reservation.page.scss'],
})
export class CreateNewReservationPage implements OnInit {
  restaurantId: number;
  restaurant: Restaurant;
  retrieveRestaurantError: boolean;
  newReservation: Reservation;
  submitted: boolean;
  tableSize: string;

  enabledTable: boolean;

  tableSizeChosen: string;


  reservationSlots: number[];
  smallAvailable: boolean;
  mediumAvailable: boolean;
  largeAvailable: boolean;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private sessionService: SessionService,
    public alertController: AlertController) {
    this.retrieveRestaurantError = false;
    this.submitted = false;
    this.newReservation = new Reservation();
    this.reservationSlots = new Array();
    this.resultSuccess = false;
    this.resultError = false;
    this.tableSize = "";
    this.smallAvailable = false;
    this.mediumAvailable = false;
    this.largeAvailable = false;
    this.enabledTable = false;
  }

  ngOnInit() {
    this.restaurantId = parseInt(this.activatedRoute.snapshot.paramMap.get('restaurantId'));
    this.refreshRestaurant();

  }

  ionViewWillEnter() {

    for (let i = this.restaurant.openTime; i < this.restaurant.closeTime; i = i + 0.5) {
      this.reservationSlots.push(i);
    }


  }

  refreshRestaurant() {
    this.restaurantService.getRestaurantByRestaurantId(this.restaurantId).subscribe(
      response => {
        this.restaurant = response;
      },
      error => {
        this.retrieveRestaurantError = true;
        console.log('********** CreateNewReservationPage.ts: ' + error);
      }
    );
  }


  getAvailableTables() {

    // if(this.newReservation.reservationDate != null && this.newReservation.reservationTime != null)
    // {
      this.restaurantService.getAvailableTables(this.restaurant.userId,
        this.newReservation.reservationDate, this.newReservation.reservationTime).subscribe(
          response => {
            let availableTables: number[] = response;
            if (availableTables[0] > 0) {
              this.smallAvailable = true;
            }
            if (availableTables[1] > 0) {
              this.mediumAvailable = true;
            }
            if (availableTables[2] > 0) {
              this.largeAvailable = true;
            }
            this.enabledTable = true;
  
            console.log('********** getAvailableTables.ts: ' + availableTables[0] + " " 
            + availableTables[1] + " " + availableTables[2]);
  
          },
          error => {
            this.message = "An error has occurred while retrieving availbale tables: " + error;
  
            console.log('********** CreateNewReservation.ts: ' + error);
          }
        );
    // }
    // else
    // {
    //   console.log("Please fill in xxx");
    // }

    
  }


  create(createReservationForm: NgForm) {

    this.submitted = true;

    // if (this.tableSizeChosen === "Small") {
    //   console.log("Table size: " + this.tableSizeChosen);
    //   this.newReservation.tableSizeAssigned = TableSize.SMALL.toString();
    // } else if (this.tableSizeChosen === "Medium") {
    //   this.newReservation.tableSizeAssigned = TableSize.MEDIUM.toString();
    // } else {
    //   this.newReservation.tableSizeAssigned = TableSize.LARGE.toString();
    // }


    

    if (createReservationForm.valid) {
      this.newReservation.restaurant = this.restaurant;
      this.newReservation.customer = this.sessionService.getCurrentCustomer();
      this.newReservation.tableSizeAssigned = 'SMALL';
      // console.log("Table size: " + this.tableSizeChosen);
      this.restaurantService.createNewReservation(this.newReservation).subscribe(
        response => {
          let newReservationId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New reservation " + newReservationId + " created successfully";

          this.newReservation = new Reservation();
          this.reservationSlots = new Array();
          this.submitted = false;
          this.smallAvailable = false;
          this.mediumAvailable = false;
          this.largeAvailable = false;
          this.tableSize = "";
          createReservationForm.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new reservation: " + error;

          console.log('********** CreateNewProductPage.ts: ' + error);
        }
      );
    }
    else
    {
      this.errorAlert();
    }
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Reservation Failed',
      message: 'Please fill in all the required fields',
      buttons: ['OK']
    });
    await alert.present();
  }

  clear() {
    this.submitted = false;
    this.newReservation = new Reservation();
  }

  back() {
    this.router.navigate(["/restaurantAdministration/viewRestaurantDetails/" + this.restaurantId]);
  }

}
