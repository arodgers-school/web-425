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

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2020', '#CodingWithAngular', '#ngOmaha'];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(
      `\n  Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person(
      'Adam Rodgers',
      'Chicken Fried Steak',
      'Cerulean'
    );
    this.myProfile.toString;
  }

  ngOnInit(): void {}
}
