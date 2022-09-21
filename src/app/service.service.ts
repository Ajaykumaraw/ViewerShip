import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './model/user';
import { LoginFields } from './model/loginFields'; 


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    baseUrl:string = 'http://localhost:8080/api/v1/student';
    SendChannelUrl = 'http://localhost:8080/api/v1/urls/channelname/';

    private userLogin:any;
    userData: LoginFields = {email: "", password:""}; 

    i:number=0;
  constructor(private http: HttpClient) { }


  PostRequest(user:User){
    this.http.post<User>(this.baseUrl,user).
    subscribe(data =>{
      alert("login successful")
      console.log(data);
    })
  }

  getData(){
    return this.http.get(this.baseUrl);
  }

  getLogin(email:String,password:String){
    this.http.get(this.baseUrl).subscribe(data =>{
      this.userLogin = data;
      console.log("befor for  each"+data);
      this.userLogin.forEach((element:LoginFields) => {
        console.log("value in "+element);
        if(element.email === email && element.password === password){
        alert("login successful");
        } else alert("login notdone");
        
      });
    })
  }
  sendChannelName(channel_name:String){
    this.SendChannelUrl = this.SendChannelUrl;
    console.log("in post method :"+this.SendChannelUrl);
    this.http.post<String>(this.SendChannelUrl,channel_name).
    subscribe(data =>{
      console.log("in post method"+this.SendChannelUrl);
      alert("channelname :"+data);
      console.log(data);
    })
  }


}
