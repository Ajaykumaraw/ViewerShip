import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './model/user';
import { LoginFields } from './model/loginFields'; 
import { DataService } from './data.service';
import { userLoginDetails } from './model/userLoginDetails';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    baseUrl:string = 'http://localhost:8080/register';
    getUserName:string = 'http://localhost:8080/home/';
    loginUrl:string = 'http://localhost:8080/api/v1/student/login';
    SendChannelUrl = 'http://localhost:8080/api/v1/urls/channelname/';
    requestStatus!:number;
    userName!:String;

    private userLogin:any;
    userLoginD: {Username:string;password:string}[] = [];

    i:number=0;
    constructor(private http: HttpClient) {
    console.log(this.userLoginD);
   }


    // PostRequest(user:User){
    //   user.role = "USER";
    //   return this.http.post<User>(this.baseUrl,user,{observe: 'response'}).
    //   subscribe(response =>{
    //   alert(response.body?.userName);
    //   this.requestStatus = response.status;
    //   console.log("in post request"+response.body+ " "+this.requestStatus);
    //   })
    // }

    PostRequest(user:User,role:boolean):Observable<any>{
      if(role){
        user.role = "asfl";
      }else user.role = "asmkt";
      return this.http.post<User>(this.baseUrl,user);
    }


}
