import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent implements OnInit {

  active:Boolean= false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  gotoMessage(){
    this.route.navigate(['/messages']);
  }
  gotoDashboard(){
    this.route.navigate(['/user']);
  }
  profile(){
    this.route.navigate(['/profile']);
  }


}
