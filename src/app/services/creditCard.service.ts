import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { CreditCard } from '../models/credit-Card';


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class CreditCardService
{
	baseUrl: string = "/api/CreditCard/";



	constructor(private httpClient: HttpClient,
				private sessionService: SessionService)
	{    
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

	viewCreditCardDetailsBycreditCardId(): Observable<CreditCard>
  {				
    return this.httpClient.get<CreditCard>(this.baseUrl + this.sessionService.getCurrentCustomer().userId + "/viewCreditCardDetails?creditCardId=" + this.sessionService.getCreditCardId()).pipe
    (
      catchError(this.handleError)
    );
  }

  viewAllCreditCardDetails(): Observable<CreditCard>
  {				
    return this.httpClient.get<CreditCard>(this.baseUrl + this.sessionService.getCurrentCustomer().userId + "/retrieveMyCreditCards").pipe
    (
      catchError(this.handleError)
    );
  }
	
  createNewCreditCard(newCreditCard: CreditCard): Observable<number>
  {		
    return this.httpClient.put<number>(this.baseUrl + this.sessionService.getCurrentCustomer().userId + "/createNewCreditCard", newCreditCard, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }

  deleteCreditCard(creditCardId : number): Observable<any>
  {
    return this.httpClient.delete<any>(this.baseUrl + this.sessionService.getCurrentCustomer().userId + "?creditCardId=" + creditCardId).pipe
    (
      catchError(this.handleError)
    );
  }

}
