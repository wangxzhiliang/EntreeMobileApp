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
		{ title: 'Update Personal Details', url: '/updateCustomer', icon: 'person'},
		{ title: 'Change Password', url: '/changePassword', icon: 'lock-open'},
		{ title: 'Add Credit Card', url: '/addCreditCard', icon: 'add-circle'},
		{ title: 'View Credit Card', url: '/viewCreditCard', icon: 'card'},
		{ title: 'View My Reviews', url: '/viewMyReviews', icon: 'chatbox-ellipses'},
		{ title: 'View My Vouchers', url: '/viewMyVouchers', icon: 'cash'},
		{ title: 'View My Reservations', url: '/viewMyReservations', icon: 'restaurant'},
		{ title: 'View My Transactions', url: '/viewMyTransactions', icon: 'documents'}
		// { title: 'View Vouchers', url: '/'}
	];

	public appPagesLogout = [
		{ title: 'Home', url: '/index', icon: 'home' },
		{ title: 'Login', url: '/login', icon: 'lock-closed' },
    	{ title: 'Create Account', url: '/createNewCustomer', icon: 'person-add' }
	];

	public appPagesSystemAdministration = [
    	{ title: 'View All Restaurants', url: '/viewAllRestaurants', icon: 'fast-food-outline' },
		{ title: 'View Vouchers', url: '/voucher', icon: 'cash-outline' }
		// { title: 'Check Out', url: '/checkoutVoucher', icon: 'arrow-forward' },
	];
  constructor(public sessionService: SessionService) {
	}


	ngOnInit() {
		
	}
}
