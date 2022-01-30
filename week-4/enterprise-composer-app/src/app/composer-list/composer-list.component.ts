/*
Title: 
    Exercise 3.2
    Updated for:
      Exercise 4.2
      Assignment 4.4
Author: 
    Adam Rodgers
Date: 
    01/23/2022
    01/29/2022
Modified By: Adam Rodgers
Description: Enhanced Composer App in Angular
                Inversion of Control and Dependency Injection
                Async Pipe
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Component, OnInit } from "@angular/core";
import { IComposer } from "../composer.interface";
import { ComposerService } from "../composer.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs";
import { Observable } from "rxjs";

@Component({
  selector: "app-composer-list",
  templateUrl: "./composer-list.component.html",
  styleUrls: ["./composer-list.component.css"],
})
export class ComposerListComponent implements OnInit {
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl("");

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe((val) => this.filterComposers(val));
  }

  ngOnInit(): void {}

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
