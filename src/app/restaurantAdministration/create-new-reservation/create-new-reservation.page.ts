import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';
import { Reservation } from '../../models/reservation';
import { TableConfiguration } from 'src/app/models/table-configuration';

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

  reservationSlots: number[];
  numSmallTables: number;
  numMediumTables: number;
  numLargeTables: number;
  tableSize: string;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,) {
    this.retrieveRestaurantError = false;
    this.submitted = false;
    this.newReservation = new Reservation();

    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.restaurantId = parseInt(this.activatedRoute.snapshot.paramMap.get('restaurantId'));
    this.refreshRestaurant();
    this.reservationSlots = new Array();
  }

  ionViewWillEnter() {
    this.refreshRestaurant();
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
        console.log('********** ViewRestaurantDetailsPage.ts: ' + error);
      }
    );
  }


  getAvailableTables() {
     this.restaurantService.getAvailableTables(this.restaurant.userId, 
      this.newReservation.reservationDate, this.newReservation.reservationTime).subscribe(
        response => {
          let availableTables: number[] = response;
          this.numSmallTables = availableTables[0];
          this.numMediumTables = availableTables[1];
          this.numLargeTables = availableTables[2];
        }, 
        error => {
          this.message = "An error has occurred while retrieving availbale tables: " + error;

          console.log('********** CreateNewReservation.ts: ' + error);
        }
     );
  }

  // create(createReservationForm: NgForm) {

  //   this.submitted = true;

  //   if (createProductForm.valid) {
  //     this.productService.createNewProduct(this.newProduct, parseInt(this.categoryId), longTagIds).subscribe(
  //       response => {
  //         let newProductId: number = response;
  //         this.resultSuccess = true;
  //         this.resultError = false;
  //         this.message = "New product " + newProductId + " created successfully";

  //         this.newProduct = new Product();
  //         this.categoryId = '';
  //         this.tagIds = new Array();
  //         this.submitted = false;
  //         createProductForm.reset();
  //       },
  //       error => {
  //         this.resultError = true;
  //         this.resultSuccess = false;
  //         this.message = "An error has occurred while creating the new product: " + error;

  //         console.log('********** CreateNewProductPage.ts: ' + error);
  //       }
  //     );
  //   }
  // }

  clear() {
    this.submitted = false;
    this.newReservation = new Reservation();
  }

  back() {
    this.router.navigate(["/restaurantAdministration/viewRestaurantDetails/" + this.restaurantId]);
  }


}
