import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Viewership';
  // isLoggedin:string = 'false';


  ngOnInit(): void {
      // localStorage.setItem("isLoggedIn",this.isLoggedin);
  }

  
  


}
