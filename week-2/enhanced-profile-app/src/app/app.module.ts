/*
Title: 
    Exercise 2.3
Author: 
    Adam Rodgers
Date: 
    01/15/2022
Modified By: Adam Rodgers
Description: Enhanced Profile App
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyImageComponent } from './my-image/my-image.component';

@NgModule({
  declarations: [AppComponent, MyDetailsComponent, MyImageComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
