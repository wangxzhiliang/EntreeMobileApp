import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Customer } from '../models/customer';
import { CreateCustomerReq } from '../models/create-customer-req';
import { UpdateCustomerReq } from '../models/update-customer-req';


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

  //retrieveCustomerByEmail in rws
	getCustomers(): Observable<Customer[]>
  {				
    return this.httpClient.get<Customer[]>(this.baseUrl + "/retrieveAllCustomers?username=" + this.sessionService.getUsername() + "&password=" + this.sessionService.getPassword()).pipe
    (
      catchError(this.handleError)
    );
  }
    
  getCustomerByCustomerId(customerId: number): Observable<Customer>
  {
    return this.httpClient.get<Customer>(this.baseUrl + "/retrieveCustomer/" + customerId + "?username=" + this.sessionService.getUsername() + "&password=" + this.sessionService.getPassword()).pipe
    (
      catchError(this.handleError)
    );
  }
	
  createNewCustomer(newCustomer: Customer): Observable<number>
  {		
    let createCustomerReq: CreateCustomerReq = new CreateCustomerReq(newCustomer);
    
    return this.httpClient.put<number>(this.baseUrl, createCustomerReq, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }
	
  updateCustomer(customerToUpdate: Customer): Observable<any>
  {
    let updateCustomerReq: UpdateCustomerReq = new UpdateCustomerReq(customerToUpdate);
    
    return this.httpClient.post<any>(this.baseUrl, updateCustomerReq, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }
  
 //Dont think can delete customer 
  // deleteCustomer(customerId: number): Observable<any>
  // {
  //   return this.httpClient.delete<any>(this.baseUrl + "/" + customerId + "?username=" + this.sessionService.getUsername() + "&password=" + this.sessionService.getPassword()).pipe
  //   (
  //     catchError(this.handleError)
  //   );
  // }

}
