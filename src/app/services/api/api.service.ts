import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
// import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  GetData() {
    return this.http.get(`${this.endpoint}`);
  }



  // Error handling
  // errorMgmt(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }
}
