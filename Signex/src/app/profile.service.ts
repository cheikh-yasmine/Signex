// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { employee } from "./Models/user.model";
// import { Observable, catchError, throwError } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {
//   private apiUrl = 'http://localhost:8080/api/v1/employee/';
//   private accessToken: string | null = null;

//   constructor(private httpClient: HttpClient) { }

//   // Existing getUserById function (unmodified)
//   // ...

//   // New function to retrieve user information using access token
//   getUserInformation(): Observable<employee> {
//     this.accessToken = localStorage.getItem('access_token'); // Assuming token is stored in local storage

//     if (!this.accessToken) {
//       return throwError('Missing access token'); // Handle missing token scenario
//     }

//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${this.accessToken}`
//     });

//     return this.httpClient.get<employee>(this.apiUrl + 'getUserInformation', { headers })
//       .pipe(
//         catchError(Error => {
//           return throwError(Error); // Re-throw the error for handling in the component
//         })
//       );
//   }
// }
