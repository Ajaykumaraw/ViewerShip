import { Component, OnInit,Input, ElementRef } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-fl-home',
  templateUrl: './fl-home.component.html',
  styleUrls: ['./fl-home.component.css']
})
export class FlHomeComponent implements OnInit {

  user:any;
  userName:String = "";
  email:String = "";
  Value!:String;
  mathingItem!:any;

  channelList:string[] = ["softwoodcoder","durgasoftsolution","testycodies","easytutorias",
                           "ux trends","soft woodcoder","softsolution"
                          ];


  constructor(private service:ServiceService) {
  //  this.service.getData().subscribe(data =>{
  //     console.log(data);
  //     this.user = data;
  //     this.userName = this.user[0].name;
  //     this.email = this.user[0].email;
  //  })
   }

   sendit(value:String){
    this.mathingItem  = this.channelList.find(x => x === value);
    this.service.sendChannelName(value);
    console.log("Value : ",this.mathingItem+this.channelList.find(x => x.charAt(0) === value));
 }

    setSelectedValue(){
      this.userName  = this.mathingItem;
    }
  ngOnInit(): void {
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
