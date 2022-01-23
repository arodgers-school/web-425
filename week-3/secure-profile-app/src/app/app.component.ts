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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// Set variables
export class AppComponent {
  assignment: string = 'Exercise 2.3 - Data Binding';
}
