import { Component, OnInit } from '@angular/core';
import { LoginFields } from '../model/loginFields';
import { User } from '../model/user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: LoginFields = {email: "", password:""}; 

  constructor(private service:ServiceService) { }
 
  ngOnInit(): void {
  }

  loginMethod(email:String,password:String){
    this.service.getLogin(email,password);
  }

}
