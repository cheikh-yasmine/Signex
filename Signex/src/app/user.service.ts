import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './signup/Models/user-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl1="http://localhost:8080/api/auth"

  constructor(private httpClient:HttpClient) { }
  
    register(user: User) {
      return this.httpClient.post<any>(this.apiUrl1+ "/register", user);
    }

    login(loginDate:{username:String;password:String}):Observable<any>
    {
      return this.httpClient.post<any>(this.apiUrl1+"/login",loginDate)
    }
}
