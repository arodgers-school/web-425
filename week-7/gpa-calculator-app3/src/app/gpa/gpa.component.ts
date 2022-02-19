/*
Title: 
    Assignment 6.4
Author: 
    Adam Rodgers
Date: 
    02/12/2022
Modified By: Adam Rodgers
Description: GPA Calculator App Pt 2
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;
  constructor() {}

  ngOnInit(): void {}
}
