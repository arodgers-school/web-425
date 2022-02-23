/*
Title: 
    Exercise 5.2
    Exercise 5.3
    Assignment 5.4
    Exercise 6.2
    Exercise 8.2
Author: 
    Adam Rodgers
Date: 
    02/5/2022
    02/6/2022
    02/12/2022
    02/23/2022
Modified By: Adam Rodgers
Description: Angular Material - Navigation and Layout
             Angular Material - Data Tables
             Angular Material - Dialogs
             Exercise 6.2 - Input/Output Properties, Part 1
             In-n-Out-Books Final Version
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;
  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
