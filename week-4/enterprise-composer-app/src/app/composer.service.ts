/*
Title: 
    Exercise 4.2
    Assignment 4.4
Author: 
    Adam Rodgers
Date: 
    01/29/2022
Modified By: Adam Rodgers
Description: 
    Inversion of Control and Dependency Injection
    Async Pipe
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Injectable } from "@angular/core";
import { IComposer } from "./composer.interface";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: "Pyotr Ilyich Tchaikovsky",
        genre: "Classical",
      },
      {
        composerId: 101,
        fullName: "Antonio Vivaldi",
        genre: "Classical",
      },
      {
        composerId: 102,
        fullName: "Claude Debussy",
        genre: "Classical",
      },
      {
        composerId: 103,
        fullName: "Richard Wagner",
        genre: "Classical",
      },
      {
        composerId: 104,
        fullName: "Johann Sebastian Bach",
        genre: "Classical",
      },
    ];
  }
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map((composers) => composers.filter((composer) => composer.fullName.toLowerCase().indexOf(name) > -1)));
  }
}
