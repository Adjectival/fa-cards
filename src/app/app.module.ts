import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgClass } from '@angular/common';


import { AppComponent } from './app.component';
import { IconsComponent } from './icons/icons.component';


@NgModule({
  declarations: [
    AppComponent,
    IconsComponent
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
