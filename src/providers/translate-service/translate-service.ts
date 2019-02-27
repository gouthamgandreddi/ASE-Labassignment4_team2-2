import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";

/*
  Generated class for the TranslateServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslateServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TranslateServiceProvider Provider');
  }

  baseURL ='https://language.uclassify.com/translate/v1/';
  key = '8uMevpYzLogM';

  triffle='https://trefle.io/api/plants?q=';
  token='&token=UmhHdHNndUpSMHBCU2lJd2ljbWIvQT09';

  data = {
    'key': '8uMevpYzLogM',
    'source': 'sv',
    'target': 'en',
    't': ['hej världen', 'hur mår du?']
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    })
  };

  public getres(t){
    return this.http.get('https://cors-anywhere.herokuapp.com/' + 'https://language.uclassify.com/translate/v1/?key=8uMevpYzLogM&source=fr&target=en&t=hej+v%c3%a4rlden&t='+t,this.httpOptions)
      .pipe(map(res =>{
        console.log('service response post - ',res);
        const mess = JSON.stringify(res);
        return mess;
      }))
  }


  public getResponse(plant){
    this.triffle = this.triffle.concat(plant,this.token);
    console.log("plant url -",this.triffle);
    return this.http
      .get('https://cors-anywhere.herokuapp.com/' +this.triffle+plant+this.token, this.httpOptions)
      .pipe(map(res => {
          console.log('palnt service response - ',res);
          return res;
        })
      )
  }

}
