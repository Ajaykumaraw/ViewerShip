import { Component, OnInit,Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../model/user';
import { userLoginDetails } from '../model/userLoginDetails';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-fl-home',
  templateUrl: './fl-home.component.html',
  styleUrls: ['./fl-home.component.css']
})


export class FlHomeComponent implements OnInit {

  userLoginD: {Username:string;password:string}[] = [];
  userName:any;
  email:String = "";
  Value!:String;
  mathingItem!:any;

  channelList:string[] = ["softwoodcoder","durgasoftsolution","testycodies","easytutorias",
                           "ux trends","soft woodcoder","softsolution"
                          ];
  activatedroute: any;


  constructor(private service:ServiceService,private userLoginDetail:DataService
      ,private route: Router) {
      console.log("in constructor"+this.userLoginD);
  
      }

   sendit(value:String){
    
 }

    setSelectedValue(){
      this.userName  = this.mathingItem;
    }
      ngOnInit(): void {
        this.userName =  localStorage.getItem("uName");
     //   alert("in constructor username"+this.userName);
      // console.log("in oninit getmethod"+this.service.getUserDetails());
      
  }
  showPopup(popup:HTMLElement){
    if(popup.className != "popup-box")
    popup.className = "popup-box";
    else popup.className = "visibillity";
  }
  diablepopup(popup:HTMLElement){
    if(popup.className != "popup-box")
    popup.className = "popup-box";
    else popup.className = "visibillity";
  }

}
