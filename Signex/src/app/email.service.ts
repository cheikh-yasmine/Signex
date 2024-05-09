import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }

  sendMail(data: FormData) {
      return this.http.post<any>('http://localhost:8080/mail/send', data);  // Replace with your backend URL
  }
}
