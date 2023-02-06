import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cam-p',
  templateUrl: './cam-p.component.html',
  styleUrls: ['./cam-p.component.css']
})
export class CamPComponent implements OnInit {

  role!:string;
  crtcm:boolean = false;
  compDatafr: FormGroup = new FormGroup({
  cmName : new FormControl('', [Validators.required, Validators.maxLength(15)]),
  cmAmt : new FormControl(20, Validators.required),
  nomCh : new FormControl(20, Validators.required),  
  prdDec : new FormControl(),
  minSubC : new FormControl(),
  cmpDur : new FormControl(),
  prdImg :  new FormControl(),
  })
  constructor() { }

  ngOnInit(): void {
    this.role = 'mkt'
  }
  crtCamp(){
    this.crtcm = true;
  }
  payStartCam(){

    console.log(this.compDatafr.value);
  }
}
