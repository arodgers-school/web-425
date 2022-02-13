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

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = [
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];
  transcriptEntries: Array<ITranscript> = [];
  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {}
}
