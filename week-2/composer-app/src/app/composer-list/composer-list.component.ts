/*
Title: 
    Exercise 2.4
Author: 
    Adam Rodgers
Date: 
    01/15/2022
Modified By: Adam Rodgers
Description: Composer List in Angular
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composerList: Array<Composer>;
  constructor() {
    this.composerList = [
      new Composer('Pyotr Ilyich Tchaikovsky', 'Classical'),
      new Composer('Antonio Vivaldi', 'Classical'),
      new Composer('Claude Debussy', 'Classical'),
      new Composer('Richard Wagner', 'Classical'),
      new Composer('Johann Sebastian Bach', 'Classical'),
    ];
  }

  ngOnInit(): void {}
}
