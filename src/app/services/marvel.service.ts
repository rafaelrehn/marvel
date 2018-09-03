import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
  

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  //apyKey = '0247dab1dd93d05010a7c31fcb2aabd8';
  //apiPath= 'https://gateway.marvel.com:443/v1/';
  
  //Your public key
  //0247dab1dd93d05010a7c31fcb2aabd8
  //Your private key
  //7927799ea4f9cb50179fc56fce15d9ecfc25d730
  
  apiPathRight = 'https://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=0247dab1dd93d05010a7c31fcb2aabd8&hash=b0d1ebbd3ce6df7691a6cc227efb36fa';
  apiPath= 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=';
  apiHash= '&limit=1&ts=1&apikey=0247dab1dd93d05010a7c31fcb2aabd8&hash=b0d1ebbd3ce6df7691a6cc227efb36fa';

  //https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron&limit=1&ts=1&apikey=0247dab1dd93d05010a7c31fcb2aabd8&hash=b0d1ebbd3ce6df7691a6cc227efb36fa

  constructor(
    private http: HttpClient,
  ) { }

  getCharacterById(name:string): Observable<any>{
    console.log('api: ', this.apiPath+name+this.apiHash);
    return this.http.get(`${this.apiPath}${name}${this.apiHash}`);
    //return this.http.get(`${this.apiPath + name + this.apiHash}`);
  }



}
