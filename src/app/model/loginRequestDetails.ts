import { Injectable } from "@angular/core";

@Injectable({
   providedIn: 'root'
 })
export class loginRequestData {
   token:any;
   userName!: string;
   isLoggedIn!:boolean;

   loginRequestData(){}


   setToken(token:string){
      this.token = token;
      console.log(this.token);
   }

   isLogged_In_save(bol:boolean){
      this.isLoggedIn = bol; //user login set true
      console.log(this.isLoggedIn);
   }

   isLogged_In_get(){
     return this.isLoggedIn;
      console.log(this.isLoggedIn);
   }



   setUserName(userName:string){
      this.userName = userName;
      console.log(this.userName);
   }

   getToken(){
      return this.token;
      console.log(this.token);
   }
   getUserName(){
      console.log(this.userName);
      return this.userName;
     
   }
}
