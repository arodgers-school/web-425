/*
Title: 
    Exercise 7.2
Author: 
    Adam Rodgers
Date: 
    02/19/2022
Modified By: Adam Rodgers
Description: Reactive Forms
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
