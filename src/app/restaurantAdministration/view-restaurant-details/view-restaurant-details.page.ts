import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RestaurantService } from '../../services/restaurant.service';
import { CustomerService } from '../../services/customer.service';
import { Restaurant } from '../../models/restaurant';
import { SessionService } from '../../services/session.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-view-restaurant-details',
  templateUrl: './view-restaurant-details.page.html',
  styleUrls: ['./view-restaurant-details.page.scss'],
})
export class ViewRestaurantDetailsPage implements OnInit {

  restaurantId: number;
  restaurantToView: Restaurant;
  retrieveRestaurantError: boolean;
  isLogin: boolean;
  handleLikeError: boolean;
  message: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private customerService: CustomerService,
    public alertController: AlertController,
    private sessionService: SessionService,) {
    this.retrieveRestaurantError = false;
    this.handleLikeError = false;
    this.message = "";
  }

  ngOnInit() {
    this.restaurantId = parseInt(this.activatedRoute.snapshot.paramMap.get('restaurantId'));
    this.refreshRestaurant();
    this.isLogin = this.sessionService.getIsLogin();


  }

  ionViewWillEnter() {
    this.refreshRestaurant();

  }

  refreshRestaurant() {
    this.restaurantService.getRestaurantByRestaurantId(this.restaurantId).subscribe(
      response => {
        this.restaurantToView = response;

        if (this.isLogin == true) {
          for (var review of this.restaurantToView.reviews) {
            if (review.customerLikes.length > 0 || review.customerLikes != undefined) {
              for (let i = 0; i < review.customerLikes.length; i++) {
                if (review.customerLikes[i].userId == this.sessionService.getCurrentCustomer().userId) {
                  review.hasLiked = true;
                }
              }
            }
          }
        }
      },
      error => {
        this.retrieveRestaurantError = true;
        console.log('********** ViewRestaurantDetailsPage.ts: ' + error);
      }
    );
  }

  back() {
    this.router.navigate(["/viewAllRestaurants"]);
  }

  handleLike(review) {

    console.log('**********handleLikes()');

    if (this.sessionService.getIsLogin()) {      
      this.customerService.likeReview(review.reviewId).subscribe(
        response => {
          console.log(response);
        },
        error => {
          this.handleLikeError = true;
          console.log('********** ViewRestaurantDetailsPage.ts: ' + error);
        }
      )
      location.reload();
    }
    else {
      this.checkLogin();
    }
  }


  async promptReservation() {
    if (this.sessionService.getIsLogin()) {
      this.router.navigate(["restaurantAdministration/createNewReservation/" + this.restaurantToView.userId]);
    }
    else {
      this.checkLogin();
    }
  }

  async promptReview() {
    if (this.sessionService.getIsLogin()) {
      this.router.navigate(["restaurantAdministration/createNewReview/" + this.restaurantToView.userId]);
    }
    else {
      this.checkLogin();
    }
  }

  async checkLogin() {


    const alert = await this.alertController.create({
      header: 'Login to Continue',
      message: 'Are you sure you want to login?',
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
            this.router.navigate(["/login"]);
          }
        }
      ]
    });

    await alert.present();

  }
}
