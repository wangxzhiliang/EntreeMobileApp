import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPagesLogin = [
		{ title: 'Home', url: '/index', icon: 'home' },
		// { title: 'View All Records', url: '/viewAllRecords', icon: 'arrow-forward' },
		// { title: 'Create New Record', url: '/createNewRecord', icon: 'arrow-forward' },
		
		{ title: 'Logout', url: '/login', icon: 'exit' },
		{ title: 'Update Personal Details', url: '/updateCustomer', icon: 'add-circle'},
		{ title: 'Change Password', url: '/changePassword', icon: 'add-circle'},
		{ title: 'Add Credit Card', url: '/addCreditCard', icon: 'add-circle'},
		{ title: 'View Credit Card', url: '/viewCreditCard', icon: 'arrow-forward'},
		{ title: 'View My Reviews', url: '/viewMyReviews', icon: 'arrow-forward'},
		{ title: 'View My Vouchers', url: '/viewMyVouchers', icon: 'arrow-forward'}
		// { title: 'View Vouchers', url: '/'}
	];

	public appPagesLogout = [
		{ title: 'Home', url: '/index', icon: 'home' },
		{ title: 'Login', url: '/login', icon: 'lock-closed' },
    	{ title: 'Create Account', url: '/createNewCustomer', icon: 'add-circle' }
	];

	public appPagesSystemAdministration = [
    	{ title: 'View All Restaurants', url: '/viewAllRestaurants', icon: 'arrow-forward' },
		{ title: 'View Vouchers', url: '/voucher', icon: 'arrow-forward' }
		// { title: 'Check Out', url: '/checkoutVoucher', icon: 'arrow-forward' },
	];
  
  constructor(public sessionService: SessionService) {
	}


	ngOnInit() {
		
	}
}
