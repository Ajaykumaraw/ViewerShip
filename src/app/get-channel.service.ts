import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { channelListResponse } from './model/chennelListResponse';
import { sendChDataToServer } from './model/sendChDataToServer';
import { loginRequestData } from './model/loginRequestDetails';


@Injectable({
  providedIn: 'root'
})
export class GetChannelService {

  apiUrl:string = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=10&q='
  userInput= 'string to search';
  typeAndkey:string ='&type=channel&key='
  apiKey:string = 'AIzaSyCeLrQSGNx77l83pnVLxlHiMsT4d_8k8Z4';
  finalUrl!:string;
  header:any;


  getSelectedCh_Data_Url:string = "http://localhost:8080/user/postUserChDetails";

  constructor(private http:HttpClient,private loginRequestDetails:loginRequestData) { }

  getChlist(userInput:string):Observable<any[]>{
      this.finalUrl = this.apiUrl+userInput+this.typeAndkey+this.apiKey;
      return this.http.get<any[]>(this.finalUrl);
  }

  getSelectedChData(chDataObject:sendChDataToServer):Observable<any>{
    console.log(chDataObject);
    this.header = new HttpHeaders().set("Authenticate",'Bearer '+ this.loginRequestDetails.getToken);

    return this.http.post(this.getSelectedCh_Data_Url,chDataObject,this.header);
}
}
