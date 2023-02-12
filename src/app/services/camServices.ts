import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {mktCampModel} from '../model/mktCampModel';

@Injectable({
  providedIn: 'root'
})
export class CamServices {

  loginUrl:string = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

//   loginRequest(LoginFields:LoginFields):Observable<any>{
//     return this.http.post<LoginFields>(this.loginUrl,LoginFields);
//   }

    //create camp
  createCamp(camDetails:mktCampModel){
    return console.log(camDetails);
  }


}
