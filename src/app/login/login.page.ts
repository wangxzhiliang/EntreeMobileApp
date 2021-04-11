import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../services/session.service';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { AccessRightEnum } from '../models/access-right-enum.enum';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	submitted: boolean;
	email: string;
	password: string;
	loginError: boolean;
	errorMessage: string;

	constructor(private router: Router,
		public sessionService: SessionService,
		private customerService: CustomerService) {
		this.submitted = false;
	}

	ngOnInit() {
	}


	clear() {
		this.email = "";
		this.password = "";
	}



	staffLogin(customerLoginForm: NgForm) {
		this.submitted = true;

		if (customerLoginForm.valid) {
			this.sessionService.setEmail(this.email);
			this.sessionService.setPassword(this.password);

			this.customerService.staffLogin(this.email, this.password).subscribe(
				response => {
					let customer: Customer = response;

					if (customer != null) {
						this.sessionService.setIsLogin(true);
						this.sessionService.setCurrentCustomer(customer);
						this.loginError = false;
					}
					else {
						this.loginError = true;
					}
				},
				error => {
					this.loginError = true;
					this.errorMessage = error
				}
			);
		}
		else {
		}
	}



	staffLogout(): void {
		this.sessionService.setIsLogin(false);
		this.sessionService.setCurrentCustomer(null);
	}



	back() {
		this.router.navigate(["/index"]);
	}
}
