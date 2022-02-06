/*
Title: 
    Exercise 5.2
Author: 
    Adam Rodgers
Date: 
    02/5/2022
Modified By: Adam Rodgers
Description: Angular Material - Navigation and Layout
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
    this.assignment = 'Exercise 5.3 - Navigation and Layout';
  }
}
