import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../../services/customer.service';
import { SessionService } from '../../services/session.service';
import { Customer } from '../../models/customer';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  submitted: boolean;
  userId: number;
  customerToChange: Customer;
  retrieveCustomerError: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  newPassword: string;
  confirmPass: string;



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private customerService: CustomerService,
    public alertController: AlertController) {
    this.submitted = false;
    this.retrieveCustomerError = false;

    this.resultSuccess = false;
    this.resultError = false;
  }



  ngOnInit() {
    this.userId = this.sessionService.getCurrentCustomer().userId;
    this.customerToChange = this.sessionService.getCurrentCustomer();
  }



  update(changePasswordForm: NgForm) {
    this.submitted = true;

    if(this.newPassword == this.confirmPass) {
      if (changePasswordForm.valid) {
        this.customerToChange.password = this.newPassword;
        this.customerService.customerUpdate(this.customerToChange).subscribe(
          response => {
            this.resultSuccess = true;
            this.resultError = false;
            this.message = "Customer password updated successfully";
          },
          error => {
            this.resultError = true;
            this.resultSuccess = false;
            this.message = "An error has occurred while updating the customer: " + error;
  
            console.log('********** UpdateCustomerPassword.ts: ' + error);
          }
        );
      }
    }
    else{
      this.errorAlert();
    }

    
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Password Error',
      message: 'Confirm password does not match. Please enter again.',
      buttons: ['OK']
    });
    await alert.present(); 
  }

  back() {
		this.router.navigate(["/"]);
	}
}
