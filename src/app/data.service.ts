import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginFields } from './model/loginFields';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  loginUrl:string = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  loginRequest(LoginFields:LoginFields):Observable<any>{
    return this.http.post<LoginFields>(this.loginUrl,LoginFields);
  }
}
