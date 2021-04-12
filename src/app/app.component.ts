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
		{ title: 'Logout', url: '/login', icon: 'exit' },
		{title: 'Update Personal Details', url: '/updateCustomer', icon: 'add-circle'},
		{title: 'Change Password', url: '/changePassword', icon: 'add-circle'}
	];

	public appPagesLogout = [
		{ title: 'Home', url: '/index', icon: 'home' },
		{ title: 'Login', url: '/login', icon: 'lock-closed' },
    	{ title: 'Create Account', url: '/createNewCustomer', icon: 'add-circle' }
	];

	public appPagesSystemAdministration = [
    	{ title: 'View All Restaurants', url: '/viewAllRestaurants', icon: 'arrow-forward' }
	];
  
  constructor(public sessionService: SessionService) {
	}


	ngOnInit() {
		
	}
}
