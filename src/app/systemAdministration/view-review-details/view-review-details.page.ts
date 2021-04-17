import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Review } from '../../models/review';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-review-details',
  templateUrl: './view-review-details.page.html',
  styleUrls: ['./view-review-details.page.scss'],
})
export class ViewReviewDetailsPage implements OnInit {

  reviewId: number;
  reviewToView: Review;
  retrieveReviewError: boolean;
  deleteError: boolean;
  message: string;
  errorMessage: string;

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    public alertController: AlertController) { 
    this.retrieveReviewError = false;
    this.deleteError = false;
  }

  ngOnInit() {
    this.reviewId = parseInt(this.activatedRoute.snapshot.paramMap.get('reviewId'));
    this.refreshRestaurant();
  }

  ionViewWillEnter() {
    this.refreshRestaurant();
  }

  refreshRestaurant() {
    this.customerService.getReviewByReviewId(this.reviewId).subscribe(
      response => {
        this.reviewToView = response;
        this.retrieveReviewError = false;
      },
      error => {
        this.retrieveReviewError = true;
        console.log('********** ViewReviewDetailsPage.ts: ' + error);
      }
    );
  }

  async deleteReview(event, review: Review) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete Review',
      message: 'Confirm delete this review?',
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
            this.customerService.deleteReviewById(review.reviewId).subscribe(
              response => {
                this.message = "Reservation deleted successfully";
                //redirect
                this.router.navigate(["/viewMyReviews"]);
              },
              error => {
                this.deleteError = true;
                // this.error = true;
                // this.message = "An error has occurred while deleting: " + error;
                this.errorMessage = error;
              }
            );


          }
        }
      ]
    });
    await alert.present();    
  }

back() {
    this.router.navigate(["/viewMyReviews"]);
  }

}
