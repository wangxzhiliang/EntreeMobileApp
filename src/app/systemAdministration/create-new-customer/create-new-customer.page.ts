import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { AlertController } from '@ionic/angular';

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
    private customerService: CustomerService,
    private sessionService: SessionService,
    public alertController: AlertController) {
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
          // this.message = "Congratulations " + this.newCustomer.firstName + " " + this.newCustomer.lastName + "! You have created an account successfully";
          this.newCustomer.userId = newCustomerId;
          // this.sessionService.setCurrentCustomer(this.newCustomer);
          this.newCustomer = new Customer();
          this.submitted = false;
          createCustomerForm.reset();
          // this.sessionService.setIsLogin(true);
          this.alertMessage();
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

  async alertMessage() {
    const alert = await this.alertController.create({
      header: 'Congratulations',
      message: 'You have created an account successfully! Proceed to Login',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(["/login"]);
          }
        }
      ],
    });
    await alert.present(); 
  }

  back() {
		this.router.navigate(["/index"]);
	}

}