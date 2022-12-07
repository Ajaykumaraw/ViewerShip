import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MktDataServiceService {

  constructor(private http:HttpClient) { }

  getMkthomeData_Url:string = "http://localhost:8080/mkt/getmktData";

  getMktData(Mkt_token:string):Observable<any>{
    const header = new HttpHeaders().set("Authenticate",'Bearer '+ Mkt_token);
    return this.http.get(this.getMkthomeData_Url,{'headers':header});
  }





}
