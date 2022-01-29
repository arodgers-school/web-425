/*
Title: 
    Exercise 3.2
    Updated for:
      Exercise 4.3
Author: 
    Adam Rodgers
Date: 
    01/23/2022
    01/29/2022
Modified By: Adam Rodgers
Description: Enhanced Composer App in Angular
                Handling Form Events with Observables
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    AboutComponent,
    ContactComponent,
    ComposerDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
