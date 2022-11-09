import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginFields } from '../model/loginFields';
import { loginRequestData} from '../model/loginRequestDetails';
import { User } from '../model/user';
import { ServiceService } from '../service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Console } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    userName:new FormControl(''),
    password:new FormControl(''),
  })
  httpResponse!:any;

  allUsers!: User[];
  loginfield!:LoginFields;
  loginRequestData!:loginRequestData;


  constructor(private router: Router,private dataService:DataService,private loginReqDetails:loginRequestData) { 
    
  }
 
  ngOnInit(): void {
  }

  loginMethod(){
   
    this.dataService.loginRequest(this.LoginForm.value).subscribe(
      data => {
        //  alert("register successful  "+this.userObject.userName+ " "+this.userObject.userName);
        console.log(data.token+" "+data.userName); 
        this.loginfield = this.LoginForm.value;
        this.httpResponse = data; 
      
        this.loginReqDetails.setUserName(data.userName);
        this.loginReqDetails.setToken(data.token);


        localStorage.removeItem('isRegistered');
        localStorage.setItem("utoken",data.token);
       // localStorage.setItem("isLoggedIn","true");
        this.loginReqDetails.isLogged_In_save(true);
        localStorage.setItem("uName",data.userName);
      
        this.router.navigate(['/user']);
          this.LoginForm.reset();
      }
    )
    console.log(this.LoginForm.value);
    this.router.navigate(['/user']);
    //this.userDetaile.userDetails = this.LoginForm.value;
  }

  

  isRegisted(){
   return localStorage.getItem('isRegistered');
  }

  
}
