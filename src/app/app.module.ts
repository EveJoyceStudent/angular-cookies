import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CookieControllerComponent } from './components/cookie-controller/cookie-controller.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CookieControllerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
