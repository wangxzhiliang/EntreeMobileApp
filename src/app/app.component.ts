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
		{ title: 'Logout', url: '/login', icon: 'exit' }
	];

	public appPagesLogout = [
		{ title: 'Home', url: '/index', icon: 'home' },
		{ title: 'Login', url: '/login', icon: 'lock-closed' },
    { title: 'Create New Customer Account', url: '/systemAdministration/create-new-customer', icon: 'add-circle' }
	];

	public appPagesSystemAdministration = [
		{
			title: 'Update Customer Details',
			url: '/systemAdministration/update-customer',
			icon: 'add-circle'
		},
    { title: 'View All Records', url: '/viewAllRecords', icon: 'arrow-forward' },
		{ title: 'Create New Record', url: '/createNewRecord', icon: 'arrow-forward' },
    { title: 'View All Restaurants', url: '/viewAllRestaurants', icon: 'arrow-forward' }
	];
  
  constructor(public sessionService: SessionService) {
	}


	ngOnInit() {
		
	}
}
