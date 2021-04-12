import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-restaurants',
  templateUrl: './view-all-restaurants.page.html',
  styleUrls: ['./view-all-restaurants.page.scss'],
})
export class ViewAllRestaurantsPage implements OnInit {

  restaurants: Restaurant[] | null;

  constructor(private router: Router, private restaurantService: RestaurantService) {
    this.restaurants = new Array();
   }

  ngOnInit() {
    this.updateModel();
  }

  ionViewWillEnter() {
    this.updateModel();
  }

  updateModel() {
    this.restaurantService.retrieveAllRestaurants().subscribe(
      response => {
        this.restaurants = response;
      }, 
      error => {
        console.log("**********ViewAllRestaurantsPage.ts: " + error);
      }
      
    );
  }

  viewRestaurantDetails(restaurant) {
    this.router.navigate(["/restaurantAdministration/viewRestaurantDetails/" + restaurant.userId]);
  }

}
