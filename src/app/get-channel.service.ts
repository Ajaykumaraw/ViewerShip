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

  apiUrl:string = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=10&q=';  // <--- orignal
  //apiUrl:string = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&forUsername=';
  // 'tseries&maxResults=5&key=[YOUR_API_KEY] HTTP/1.1'
  userInput= 'string to search';
  typeAndkey:string ='&type=channel&key=';  //  <--- orignal
 // typeAndkey:string ='&maxResults=5&key='
  apiKey:string = 'AIzaSyCeLrQSGNx77l83pnVLxlHiMsT4d_8k8Z4';
  finalUrl!:string;
  header:any;


  getSelectedCh_Data_Url:string = "http://localhost:8080/user/postUserChDetails";

  fetchDataOnLoginUrl:string = "http://localhost:8080/user/getChnameAndData?userName="



  constructor(private http:HttpClient,private loginRequestDetails:loginRequestData) { }

  getChlist(userInput:string):Observable<any[]>{
      this.finalUrl = this.apiUrl+userInput+this.typeAndkey+this.apiKey;
      return this.http.get<any[]>(this.finalUrl);
  }

  getSelectedChData(chDataObject:sendChDataToServer,token_:string):Observable<any>{
    console.log(chDataObject+" "+token_);
    const header = new HttpHeaders().set("Authenticate",'Bearer '+ token_);

    return this.http.post(this.getSelectedCh_Data_Url,chDataObject,{'headers':header});
}

  getChDataOnLogin(userName:string,userToken_N:string):Observable<any>{
    console.log(userName+" "+userToken_N);
    const header_this = new HttpHeaders().set("Authenticate",'Bearer '+ userToken_N);
    console.log(header_this);
    return this.http.post(this.fetchDataOnLoginUrl+userName,null,{'headers':header_this});
}
}
