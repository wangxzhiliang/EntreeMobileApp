import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-view-restaurant-details',
  templateUrl: './view-restaurant-details.page.html',
  styleUrls: ['./view-restaurant-details.page.scss'],
})
export class ViewRestaurantDetailsPage implements OnInit {

  restaurantId: number;
  restaurantToView: Restaurant;
  retrieveRestaurantError: boolean;

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService, 
    public alertController: AlertController, 
    private sessionService: SessionService,) { 
    this.retrieveRestaurantError = false;
  }

  ngOnInit() {
    this.restaurantId = parseInt(this.activatedRoute.snapshot.paramMap.get('restaurantId'));

    this.refreshRestaurant();
  }

  ionViewWillEnter() {
    this.refreshRestaurant();
  }

  refreshRestaurant() {
    this.restaurantService.getRestaurantByRestaurantId(this.restaurantId).subscribe(
      response => {
        this.restaurantToView = response;
    
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

handleLike(){
  console.log('**********handleLikes()');
}

handleDislike(){
  console.log('**********handleDislike()');
}

async promptReservation(){
  
  if(this.sessionService.getIsLogin()) {
    this.router.navigate(["restaurantAdministration/createNewReservation/"+ this.restaurantToView.userId]);;
  }
  else {

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

}
