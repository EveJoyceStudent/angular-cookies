import { Component, OnInit } from '@angular/core';
import { Cookie } from '../../models/cookie.model';
import { SprinkleCookie } from '../../models/sprinkle.model';
import { Colours } from '../../models/colours.enum';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'cookieController',
  templateUrl: './cookie-controller.component.html',
  styleUrls: ['./cookie-controller.component.css']
})
export class CookieControllerComponent implements OnInit {
  public Colours = Colours;
  newCookieType: string = 'Cookie';
  newCookieName: string = 'new cookie name';
  cookieSelected: Cookie=new Cookie("");
  newCookieColour = this.cookieSelected.colour;

  cookieList: Cookie[]=[];

  addChocChip(){
    this.cookieSelected.chocolateChipNum++;
  }
  removeChocChip(){
    this.cookieSelected.chocolateChipNum--;
  }

  newCookie(){
    if(this.newCookieType==='Cookie'){
      this.cookieList.push(new Cookie(this.newCookieName));
    } else {
      this.cookieList.push(new SprinkleCookie(this.newCookieName));
    }
    if(this.cookieList.length===1){
      this.cookieSelected=this.cookieList[0];
    }

  }

  constructor() {}

  ngOnInit() {}
}
