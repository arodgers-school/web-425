/*
Title: 
    Assignment 5.4
Author: 
    Adam Rodgers
Date: 
    02/6/2022
Modified By: Adam Rodgers
Description: Angular Material - Dialogs
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
    Classmate Lucas H. for sharing fix for error on line: '@Inject(MAT_DIALOG_DATA) data'
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';
import { AnimationDriver } from '@angular/animations/browser';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css'],
})
export class BookDetailsDialogComponent implements OnInit {
  book: IBook;
  constructor(
    private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {}
}
