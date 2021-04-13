import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-view-restaurant-details',
  templateUrl: './view-restaurant-details.page.html',
  styleUrls: ['./view-restaurant-details.page.scss'],
})
export class ViewRestaurantDetailsPage implements OnInit {

  restaurantId: number;
  restaurantToView: Restaurant;
  retrieveRestaurantError: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,) { 
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

promptReservation(){
  this.router.navigate(["restaurantAdministration/createNewReservation/"+ this.restaurantToView.userId]);
}

}
