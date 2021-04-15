import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Customer } from '../models/customer';
import { Review } from '../models/review';
import {CustomerVoucher} from '../models/customer-voucher';
import {Reservation} from '../models/reservation';
import {SaleTransaction} from '../models/sale-transaction';

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
    return this.httpClient.get<Customer>(this.baseUrl + "/retrieveCustomerById?customerId=" + userId ).pipe
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
    return this.httpClient.put<any>(this.baseUrl, customerToUpdate, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }

  changePassword(customerToUpdate: Customer): Observable<any>
  {
    return this.httpClient.post<any>(this.baseUrl, customerToUpdate, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }
  
  getMyReviews(customerId: number): Observable<Review>
  {
    return this.httpClient.get<Review>("/api/Review/retrieveMyReviews/" + this.sessionService.getCurrentCustomer().userId).pipe
    (
      catchError(this.handleError)
    );
  }

  getReviewByReviewId(reviewId: number): Observable<Review>{
  return this.httpClient.get<Review>("/api/Review/retrieveReviewById/" + reviewId).pipe
    (
      catchError(this.handleError)
    );
  }

  deleteMyReservation(reservationId: number): Observable<any>{
    return this.httpClient.delete<any>("api/Reservation/deleteReservation?reservationId=" + reservationId).pipe
    (
      catchError(this.handleError)
    );
  }

  getMyVouchers(customerId: number): Observable<CustomerVoucher>
  {
    return this.httpClient.get<CustomerVoucher>("/api/Voucher/retrieveMyCustomerVouchers/" + this.sessionService.getCurrentCustomer().userId).pipe
    (
      catchError(this.handleError)
    );
  }

  getVoucherByVoucherId(voucherId: number): Observable<CustomerVoucher>{
  return this.httpClient.get<CustomerVoucher>("/api/Voucher/retrieveCustomerVoucherDetails/" + voucherId).pipe
    (
      catchError(this.handleError)
    );
  }

  getMyReservations(customerId: number): Observable<Reservation>
  {
    return this.httpClient.get<Reservation>("/api/Reservation/retrieveMyReservationForCustomer?customerId=" + customerId).pipe
    (
      catchError(this.handleError)
    );
  }

  getMyTransactions(userId: number): Observable<SaleTransaction>
  {
    return this.httpClient.get<SaleTransaction>("/api/Transaction/retrieveMyTransactions/" + this.sessionService.getCurrentCustomer().userId).pipe
    (
      catchError(this.handleError)
    );
  }

}
