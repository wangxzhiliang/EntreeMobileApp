import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
		{ title: 'Home', url: '/index', icon: 'home' },
		{ title: 'View All Records', url: '/viewAllRecords', icon: 'arrow-forward' },
		{ title: 'Create New Record', url: '/createNewRecord', icon: 'arrow-forward' }
	];
  
  constructor() {}
}
