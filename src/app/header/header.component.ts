import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginRequestData } from '../model/loginRequestDetails';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    profileUserName:string='';


  constructor(private router:Router,private loginRequest:loginRequestData) { 
    this.profileUserName = loginRequest.getUserName();
    console.log(loginRequest.getUserName());

  }

  ngOnInit(): void {
    
  }

  

  showLogout(divName:HTMLElement){
    if(divName.className != "showLogoutSection")
         divName.className = "showLogoutSection";
    else divName.className = "logout-section";
  }

  loggedin(){
     this.loginRequest.isLogged_In_get();
    return  localStorage.getItem('utoken');
  }


  logout(){
    localStorage.removeItem('utoken');
    localStorage.removeItem('uName');
    localStorage.removeItem('isRegistered');
    localStorage.setItem("isLoggedIn","false");
    this.loginRequest.isLogged_In_save(false);
   // localStorage.setItem("isLoggedIn","false");
    this.router.navigate(['/login']);
  }
}
