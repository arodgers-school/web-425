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
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;
  constructor() {}

  ngOnInit(): void {}
}
