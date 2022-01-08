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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myWorld = "You are now in Adam's World!";
}
