import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pre-register',
  templateUrl: './pre-register.component.html',
  styleUrls: ['./pre-register.component.css']
})
export class PreRegisterComponent implements OnInit {

  asmkt:any;
  @ViewChild('mktsection') mktsection!:ElementRef;
  @ViewChild('flsection') flsection!:ElementRef;
  @ViewChild('createbtn') createbtn!:ElementRef;


  constructor(private router:Router) {
  
   }

  ngOnInit(): void {
  
  }

  mktsettag(){
    this.asmkt = "asmkt";
    this.mktsection.nativeElement.className = "setcolor";  
    //alert(this.asmkt);
    this.flsection.nativeElement.className = "diableDive";
    this.createbtn.nativeElement.className = "crt-acc-btn"
  }

  flsettag(){
    this.asmkt = "asfl";
    this.flsection.nativeElement.className = "setcolor";
    this.mktsection.nativeElement.className = "diableDive";
    this.createbtn.nativeElement.className = "crt-acc-btn"
  }
  


  routeToRegister(){
    this.router.navigate(['/register'],{ queryParams:{"as":this.asmkt}});
   // alert(this.asmkt);
  }




}
