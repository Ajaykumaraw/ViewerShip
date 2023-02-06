import { Component, Input, OnInit } from '@angular/core';
import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() userName!:string;
  @Input() userChName!:string;
  @Input() role!:string;

  nvlinks!:Element;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoMessage(){
    this.router.navigate(['/messages']);
  }
  gotoDashboard(){
    this.router.navigate(['/user']);
  }
  profile(){
    this.router.navigate(['/profile']);
  }
  gotoCampagin(){
    if(this.role==='mkt'){
      this.router.navigate(['/camp']);
    }else{
      this.router.navigate(['/flcamp']);
    }
  }


}
