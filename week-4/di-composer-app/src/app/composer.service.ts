/*
Title: 
    Exercise 4.2
Author: 
    Adam Rodgers
Date: 
    01/29/2022
Modified By: Adam Rodgers
Description: Inversion of Control and Dependency Injection
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Pyotr Ilyich Tchaikovsky',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'Antonio Vivaldi',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Claude Debussy',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Richard Wagner',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
    ];
  }
  getComposers() {
    return this.composers;
  }
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
