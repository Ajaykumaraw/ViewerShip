import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showLogout(divName:HTMLElement){
    if(divName.className != "showLogoutSection")
         divName.className = "showLogoutSection";
    else divName.className = "logout-section";
  }

  loggedin(){
    return  localStorage.getItem('utoken');
  }


  logout(){
    localStorage.removeItem('utoken');
    localStorage.removeItem('uName');
    localStorage.removeItem('isRegistered');
    localStorage.setItem("isLoggedIn","false");
    this.router.navigate(['/login']);
  }
}
