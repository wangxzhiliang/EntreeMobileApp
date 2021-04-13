import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../../services/customer.service';
import { SessionService } from '../../services/session.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.page.html',
  styleUrls: ['./update-customer.page.scss'],
})
export class UpdateCustomerPage implements OnInit {

  submitted: boolean;
  userId: number;
  customerToUpdate: Customer;
  retrieveCustomerError: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private customerService: CustomerService,) {
    this.submitted = false;
    this.retrieveCustomerError = false;

    this.resultSuccess = false;
    this.resultError = false;
  }



  ngOnInit() {
    this.userId = this.sessionService.getCurrentCustomer().userId;
    this.customerService.getCustomerById(this.userId).subscribe(
      response => {
        this.customerToUpdate = response;
      },
      error => {
        this.retrieveCustomerError = true;
        console.log('********** UpdateCustomerPage.ts: ' + error);
      }
    );
  }



  update(updateCustomerForm: NgForm) {
    this.submitted = true;

    if (updateCustomerForm.valid) {
      this.customerService.customerUpdate(this.customerToUpdate).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Customer updated successfully";
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating the customer: " + error;

          console.log('********** UpdateCustomerComponent.ts: ' + error);
        }
      );
    }
  }
  back() {
		this.router.navigate(["/index"]);
	}
}

