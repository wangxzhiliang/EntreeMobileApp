import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Voucher } from '../models/voucher';
import { SessionService } from './session.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'aplication/json' })
}


@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  baseUrl: string = "/api/Voucher";


  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) { }


  getVouchers(): Observable<Voucher[]>
  {
    return this.httpClient.get<Voucher[]>(this.baseUrl + "/retrieveAllVouchers").pipe
    (
      catchError(this.handleError)
    );
  }

  getVoucherById(voucherId: number): Observable<Voucher>
  {
    return this.httpClient.get<Voucher>(this.baseUrl + "/retrieveVoucherDetails/" + voucherId).pipe
    (
      catchError(this.handleError)
    );
  }

  buyVoucher(voucherId: number): Observable<number>
  {
    return this.httpClient.put<number>(this.baseUrl + "/buyVoucher?voucherId=" + voucherId + 
          "&customerId=" + this.sessionService.getCurrentCustomer().userId, httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse)
  {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent)
    {
      errorMessage = "An unknow error has occurred: " + error.error;
    }
    else
    {
      errorMessage = "An HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }


}
