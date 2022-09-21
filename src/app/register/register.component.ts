import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData: User = {name : "", email: "", password:""}; 
  
  constructor(private serives:ServiceService) {}
 
  ngOnInit(): void {}
  
  getData(username:String,email:String,password:String){
     console.log(username+""+email+""+password);
    this.userData.name = username;
    
    this.userData.name = username;
    this.userData.email = email;
    this.userData.password = password;
    console.log(this.userData);
    this.serives.PostRequest(this.userData);
  }

}
