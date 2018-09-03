import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

import {Md5} from "md5-typescript";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  character: any;
  nameCharacter: string;

  apyPublicKey = '0247dab1dd93d05010a7c31fcb2aabd8';
  apyPrivateKey = '7927799ea4f9cb50179fc56fce15d9ecfc25d730';  
  timeStamp = '1';
  //Your public key
  //0247dab1dd93d05010a7c31fcb2aabd8
  //Your private key
  //7927799ea4f9cb50179fc56fce15d9ecfc25d730

  //http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

  //http://gateway.marvel.com/v1/public/comics?ts=1&apikey=0247dab1dd93d05010a7c31fcb2aabd8&hash=b0d1ebbd3ce6df7691a6cc227efb36fa funcionando

  //api = &apikey=0247dab1dd93d05010a7c31fcb2aabd8&hash=b0d1ebbd3ce6df7691a6cc227efb36fa

  //https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron%20man?ts=1&apikey=0247dab1dd93d05010a7c31fcb2aabd8&hash=b0d1ebbd3ce6df7691a6cc227efb36fa
  

  constructor(
    private _data: MarvelService
  ) { }

  ngOnInit() {
    //console.log('hash: ', Md5.init(this.timeStamp+this.apyPrivateKey+this.apyPublicKey))
  }
  
  getCharacters(){
    this._data.getCharacterById(this.nameCharacter).subscribe( (result)=> {
      console.log('result: ', result);
      this.character = result.data.results[0] ;
      console.log('character', this.character);
    });

  }

}
