import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-create-new-customer',
  templateUrl: './create-new-customer.page.html',
  styleUrls: ['./create-new-customer.page.scss'],
})
export class CreateNewCustomerPage implements OnInit {

  submitted: boolean;
  newCustomer: Customer;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,) {
    this.submitted = false;
    this.newCustomer = new Customer();

    this.resultSuccess = false;
    this.resultError = false;
  }



  ngOnInit() {
  }



  clear() {
    this.submitted = false;
    this.newCustomer = new Customer();
  }



  create(createCustomerForm: NgForm) {

    this.submitted = true;

    if (createCustomerForm.valid) {
      this.customerService.createNewCustomer(this.newCustomer).subscribe(
        response => {
          let newCustomerId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New customer " + newCustomerId + " created successfully";

          this.newCustomer = new Customer();
          this.submitted = false;
          createCustomerForm.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new customer: " + error;

          console.log('********** CreateNewCustomerPage.ts: ' + error);
        }
      );
    }
  }

}