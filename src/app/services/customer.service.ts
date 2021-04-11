import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Customer } from '../models/customer';



const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class CustomerService
{
	baseUrl: string = "/api/Customer";



	constructor(private httpClient: HttpClient,
				private sessionService: SessionService)
	{    
	}



	customerLogin(username: string | undefined, password: string | undefined): Observable<Customer>
	{
		return this.httpClient.get<Customer>(this.baseUrl + "/customerLogin?username=" + username + "&password=" + password).pipe
		(
			catchError(this.handleError)
		);
	}



	private handleError(error: HttpErrorResponse)
	{
		let errorMessage: string = "";
		
		if (error.error instanceof ErrorEvent) 
		{		
			errorMessage = "An unknown error has occurred: " + error.error;
		} 
		else 
		{		
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
		}
		
		console.error(errorMessage);
		
		return throwError(errorMessage);		
	}
}
