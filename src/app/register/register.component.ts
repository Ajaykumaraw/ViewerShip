import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';
import {FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  asmkt:any;
  ismkt:boolean = false;
  Params:String="asmkt";
  userObject!:User;
  

  role:String = "USER";
  @ViewChild('category') category!:ElementRef;


  RegisterationForm = new FormGroup({
    userName:new FormControl(''),
    email:new FormControl(''),
    category:new FormControl(''),
    password:new FormControl(''),
  })

  constructor(private serives:ServiceService, private ActivRoute:ActivatedRoute,
    private router:Router) {
  
  }
 
  ngOnInit(): void {
    this.ActivRoute.queryParams.subscribe(
      params => {
        if(this.Params === params['as']){
          this.asmkt = "Marketing Official";
          this.ismkt = false;
        }else{
          this.asmkt = "Channel Holder";
          this.ismkt = true;
        }
      }
    )
  }

  
  // getData(username:String,email:String,password:String){
  //    console.log(username+""+email+""+password);
  //   this.userData.name = username;
    
  //   this.userData.name = username;
  //   this.userData.email = email;
  //   this.userData.password = password;
  //   console.log(this.userData);
  //   this.serives.PostRequest(this.userData);
  // }  

  getFormData(){
    this.serives.PostRequest(this.RegisterationForm.value,this.ismkt).subscribe(
      data => {
        this.userObject = data;
        //  alert("register successful  "+this.userObject.userName+ " "+this.userObject.userName);
        //  localStorage.setItem("uName",this.userObject.userName);
            this.router.navigate(['/login']);
            localStorage.setItem("isRegistered","ture");
          this.RegisterationForm.reset();
      }
    )
  }


}
