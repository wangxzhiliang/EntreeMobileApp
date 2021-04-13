import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';
import { Reservation } from '../../models/reservation';
import { TableConfiguration } from 'src/app/models/table-configuration';
import { TableSize } from 'src/app/models/table-size.enum';

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

  reservationSlots: number[];
  smallAvailable: boolean;
  mediumAvailable: boolean;
  largeAvailable: boolean;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,) {
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

          console.log('********** getAvailableTables.ts: ' + availableTables[0] + " " 
          + availableTables[1] + " " + availableTables[2]);

        },
        error => {
          this.message = "An error has occurred while retrieving availbale tables: " + error;

          console.log('********** CreateNewReservation.ts: ' + error);
        }
      );
  }


  create(createReservationForm: NgForm) {

    this.submitted = true;

    if (this.tableSize === "Small") {
      this.newReservation.tableSizeAssigned = TableSize.SMALL;
    } else if (this.tableSize === "Medium") {
      this.newReservation.tableSizeAssigned = TableSize.MEDIUM;
    } else {
      this.newReservation.tableSizeAssigned = TableSize.LARGE;
    }

    if (createReservationForm.valid) {
      this.restaurantService.createNewReservation(this.newReservation, this.restaurant.userId).subscribe(
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
  }

  clear() {
    this.submitted = false;
    this.newReservation = new Reservation();
  }

  back() {
    this.router.navigate(["/restaurantAdministration/viewRestaurantDetails/" + this.restaurantId]);
  }

}
