import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showLogout(divName:HTMLElement){
    if(divName.className != "showLogoutSection")
         divName.className = "showLogoutSection";
    else divName.className = "logout-section";
  }

}
