import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from "@angular/http";

import { Trip } from "../models/trip";
import { User } from "../models/user";


@Injectable()
export class TripDataService {
  constructor(
    private http: Http,
  ) {}

  private apiBaseUrl = "http://localhost:3000/api/";
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public getTrips(): Promise<Trip[]> {
    console.log("Inside TripDataService#getTrips");
    return this.http
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      .then((response) => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log("Inside TripDataService#getdTrip");
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then((response) => response.json() as Trip)
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#addTrip");
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,
    });
    return this.http
      .post(this.tripUrl, formData, { headers: headers })
      .toPromise()
      .then((response) => response.json() as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#updateTrip");
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,
    });
    return this.http
      .put(this.tripUrl + formData.code, formData, { headers: headers })
      .toPromise()
      .then((response) => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}