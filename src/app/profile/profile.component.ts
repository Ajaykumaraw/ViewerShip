import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }
  chProfileImg(){
    // document.querySelector('input')?.click();
  }
  // handle(e:Event){
  //   console.log('Change input file');
  // }

}
