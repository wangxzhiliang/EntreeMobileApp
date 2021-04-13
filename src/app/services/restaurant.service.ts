import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Restaurant } from '../models/restaurant';
import { Reservation } from '../models/reservation';
import { CreateReservationReq } from '../models/create-reservation-req';
import { SessionService } from '../services/session.service';
import { GetAvailableTablesReq } from '../models/get-available-tables-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  baseUrl: string = "/api/Restaurant";

  constructor(private httpClient: HttpClient, private sessionService: SessionService) {

  }

  retrieveAllRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(this.baseUrl + "/retrieveAllRestaurants").pipe
      (
        catchError(this.handleError)
      );
  }

  getRestaurantByRestaurantId(userId: number): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(this.baseUrl + "/retrieveRestaurantDetails?restaurantId=" + userId).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewReservation(newReservation: Reservation, restaurantId: number): Observable<number>
    {		
      let createRestaurantReq: CreateReservationReq = new CreateReservationReq(newReservation, 
        this.sessionService.getCurrentCustomer().userId, restaurantId);
      
      return this.httpClient.put<number>(this.baseUrl, createRestaurantReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
    }

    getAvailableTables(restaurantId: number, reservationDate: Date, reservationTime: number): Observable<number[]> {
      let dateString: string = reservationDate.toISOString().split('T')[0];

      return this.httpClient.get<number[]>(
        "/api/Reservation/retrieveRestaurantAvailableTableByTime?restaurantId=" + restaurantId
        + "&date=" + dateString + "&time=" + reservationTime).pipe
      (
        catchError(this.handleError)
      );
    }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
