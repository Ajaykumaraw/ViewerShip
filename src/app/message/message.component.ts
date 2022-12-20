import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  singleUserActive:boolean = false;
  message:any;

  messageArea = new FormGroup({
    UserMassage:new FormControl(''),
  })

  userMessageList:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    console.log(this.messageArea.value.UserMassage);
    this.userMessageList.push(this.messageArea.value.UserMassage);
  }

  openChat(){
    this.singleUserActive = true;
  }

}
