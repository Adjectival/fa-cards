import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgClass } from '@angular/common';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NgClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
