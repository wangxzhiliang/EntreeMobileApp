import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../../services/customer.service';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';
import { Review } from '../../models/review';
import { SessionService } from 'src/app/services/session.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-create-new-review',
  templateUrl: './create-new-review.page.html',
  styleUrls: ['./create-new-review.page.scss'],
})
export class CreateNewReviewPage implements OnInit {
  restaurantId: number;
  userId: number;
  restaurant: Restaurant;
  newReview: Review;
  submitted: boolean;
  content: string;
  rating: number;
  restaurantName: string;

  resultSuccess: boolean;
  resultError: boolean;
  retrieveRestaurantError: boolean;
  message: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private CustomerService: CustomerService,
    private RestaurantService: RestaurantService,
    private sessionService: SessionService) {
    this.submitted = false;
    this.newReview = new Review();
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.restaurantId = parseInt(this.activatedRoute.snapshot.paramMap.get('restaurantId'));
    this.userId = this.sessionService.getCurrentCustomer().userId;
    this.refreshRestaurant();
  }

  refreshRestaurant() {
    this.RestaurantService.getRestaurantByRestaurantId(this.restaurantId).subscribe(
      response => {
        this.restaurant = response;
        // console.log("get restaurant!!!")
        this.restaurantName = this.restaurant.name;
        // console.log(this.restaurant.name);
      },
      error => {
        this.retrieveRestaurantError = true;
        console.log('********** CreatenewReviewPage.ts: ' + error);
      }
    );
  }

  create(createReviewForm: NgForm) {

    this.submitted = true;

    // if (this.tableSizeChosen === "Small") {
    //   console.log("Table size: " + this.tableSizeChosen);
    //   this.newReview.tableSizeAssigned = TableSize.SMALL.toString();
    // } else if (this.tableSizeChosen === "Medium") {
    //   this.newReview.tableSizeAssigned = TableSize.MEDIUM.toString();
    // } else {
    //   this.newReview.tableSizeAssigned = TableSize.LARGE.toString();
    // }


    

    if (createReviewForm.valid) {
      this.newReview.creator = this.sessionService.getCurrentCustomer();
      this.newReview.customerLikes = new Customer[10];
      console.log(this.newReview.rating);
      this.CustomerService.createNewReview(this.newReview, this.restaurantId).subscribe(
        response => {
          let newReviewId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New review " + newReviewId + " created successfully";

          this.newReview = new Review();
          this.content = "";
          this.rating = 3;
          createReviewForm.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new review: " + error;

          console.log('********** CreateNewReviewPage.ts: ' + error);
        }
      );
    }
  }

  clear() {
    this.submitted = false;
    this.newReview = new Review();
  }

  back() {
    this.router.navigate(["/restaurantAdministration/viewRestaurantDetails/" + this.restaurantId]);
  }

}
