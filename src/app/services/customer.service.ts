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



	customerLogin(email: string | undefined, password: string | undefined): Observable<Customer>
	{
		return this.httpClient.get<Customer>(this.baseUrl + "/customerLogin?email=" + email + "&password=" + password).pipe
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

  //retrieveCustomerByEmail in rws
	getCustomers(): Observable<Customer[]>
  {				
    return this.httpClient.get<Customer[]>(this.baseUrl + "/retrieveAllCustomers?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
    (
      catchError(this.handleError)
    );
  }
    
  getCustomerById(userId: number): Observable<Customer>
  {
    return this.httpClient.get<Customer>(this.baseUrl + "/retrieveCustomerById/" + userId ).pipe
    (
      catchError(this.handleError)
    );
  }
	
  createNewCustomer(newCustomer: Customer): Observable<number>
  {		
    return this.httpClient.put<number>(this.baseUrl + "/createNewCustomer", newCustomer, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }
	
  customerUpdate(customerToUpdate: Customer): Observable<any>
  {
    return this.httpClient.put<number>(this.baseUrl, customerToUpdate, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }

  changePassword(customerToUpdate: Customer): Observable<any>
  {
    return this.httpClient.put<number>(this.baseUrl, customerToUpdate, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }
  
 //Dont think can delete customer 
  // deleteCustomer(customerId: number): Observable<any>
  // {
  //   return this.httpClient.delete<any>(this.baseUrl + "/" + customerId + "?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
  //   (
  //     catchError(this.handleError)
  //   );
  // }

}
