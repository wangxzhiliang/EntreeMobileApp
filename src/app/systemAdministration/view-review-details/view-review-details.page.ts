import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Review } from '../../models/review';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-review-details',
  templateUrl: './view-review-details.page.html',
  styleUrls: ['./view-review-details.page.scss'],
})
export class ViewReviewDetailsPage implements OnInit {

  reviewId: number;
  reviewToView: Review;
  retrieveReviewError: boolean;

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,) { 
    this.retrieveReviewError = false;
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

back() {
    this.router.navigate(["/viewMyReviews"]);
  }

}
