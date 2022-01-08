/*
Title: 
    Exercise 1.5
Author: 
    Adam Rodgers
Date: 
    01/08/2022
Modified By: Adam Rodgers
Description: Components
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
  assignment: string = 'Assignment 1.5 - Components';
}
