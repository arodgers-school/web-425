/*
Title: 
    Exercise 6.2
    Assignment 6.4
Author: 
    Adam Rodgers
Date: 
    02/12/2022
Modified By: Adam Rodgers
Description: Input/Output Properties, Pt 1
             Input Properties
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {}
}
