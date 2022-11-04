import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-mkt-home',
  templateUrl: './mkt-home.component.html',
  styleUrls: ['./mkt-home.component.css']
})
export class MKTHomeComponent implements OnInit {

  allUsers!: User;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    // console.log(this.service.getData());
  }
}
