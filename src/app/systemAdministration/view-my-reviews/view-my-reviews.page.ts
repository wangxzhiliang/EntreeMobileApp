import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review';
import { CustomerService } from '../../services/customer.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-my-reviews',
  templateUrl: './view-my-reviews.page.html',
  styleUrls: ['./view-my-reviews.page.scss'],
})
export class ViewMyReviewsPage implements OnInit {

  reviews: Review[];
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  creditCardId: number;

  constructor(private router: Router, 
    private customerService: CustomerService,
    private sessionService: SessionService) {
      this.error = false;
      this.resultSuccess = false;
   }

   ngOnInit() {
    this.updateModel();
  }

  ionViewWillEnter() {
    this.updateModel();
  }

  updateModel() {
    this.customerService.getMyReviews(this.sessionService.getCurrentCustomer().userId).subscribe(
      response => {
        this.reviews = response;
        // let res = this.reviews;
        // if(this.reviews[1] == null){
        //   this.reviews = res[0];
        // }
        this.resultSuccess = true;
      }, 
      error => {
        this.resultSuccess = false;
        console.log("**********ViewMyReviews.ts: " + error);
      }
      
    );
  }

  viewReviewDetails(review) {
    this.router.navigate(["/viewReviewDetails/" + review.reviewId]);
  }

}
