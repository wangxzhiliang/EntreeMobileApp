import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Restaurant } from '../models/restaurant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  baseUrl: string = "/api/Restaurant";

  constructor(private httpClient: HttpClient) {

  }

  retrieveAllRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(this.baseUrl + "/retrieveAllRestaurants").pipe
      (
        catchError(this.handleError)
      );
  }

  getRestaurantByRestaurantId(userId: number): Observable<Restaurant>
    {
      return this.httpClient.get<Restaurant>(this.baseUrl + "/retrieveRestaurantDetails?restaurantId=" + userId).pipe
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
