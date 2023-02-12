import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mktCampModel } from '../model/mktCampModel';
import { CamServices } from '../services/camServices';

@Component({
  selector: 'app-cam-p',
  templateUrl: './cam-p.component.html',
  styleUrls: ['./cam-p.component.css']
})
export class CamPComponent implements OnInit {

  role!:string;
  crtcm:boolean = false;
  campData!:mktCampModel;

  compDatafr: FormGroup = new FormGroup({
  cmName : new FormControl('', [Validators.required, Validators.maxLength(15)]),
  cmAmt : new FormControl(20, Validators.required),
  nomCh : new FormControl(20, Validators.required),  
  prdDec : new FormControl(),
  minSubC : new FormControl(),
  cmpDur : new FormControl(),
  prdImg :  new FormControl(),
  })
  constructor( private camServie:CamServices) { }

  ngOnInit(): void {
    this.role = 'mkt'
  }
  crtCamp(){
    this.crtcm = true;
  }
  payStartCam(){
      this.campData = this.compDatafr.value;
    this.camServie.createCamp(this.compDatafr.value);
    console.log(this.campData);
  }
}
