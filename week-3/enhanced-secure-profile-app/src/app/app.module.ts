/*
Title: 
    Exercise 3.3
Author: 
    Adam Rodgers
Date: 
    01/22/2022
Modified By: Adam Rodgers
Description: Secure Profile App in Angular
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyImageComponent } from './my-image/my-image.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    MyImageComponent,
    HomeComponent,
    SigninComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
