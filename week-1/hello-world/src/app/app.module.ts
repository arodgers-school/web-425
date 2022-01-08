/*
Title: 
    Exercise 1.3
Author: 
    Adam Rodgers
Date: 
    01/07/2022
Modified By: Adam Rodgers
Description: Angular CLI
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
