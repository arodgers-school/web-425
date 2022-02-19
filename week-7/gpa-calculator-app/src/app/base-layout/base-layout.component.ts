/*
Title: 
    Exercise 6.2
    Assignment 6.4
    Exercise 7.2
    Exercise 7.3
Author: 
    Adam Rodgers
Date: 
    02/12/2022
    02/19/2022
Modified By: Adam Rodgers
Description: Input/Output Properties, Pt 1
             Input Properties
             Reactive Forms
             GPA Calculator
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor(private cookieServive: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.3 - GPA Calculator';
  }

  ngOnInit(): void {}

  signOut() {
    this.cookieServive.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
