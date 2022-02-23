/*
Title: 
    Exercise 5.2
    Exercise 5.3
    Assignment 5.4
    Exercise 8.2
Author: 
    Adam Rodgers
Date: 
    02/5/2022
    02/6/2022
    02/23/2022
Modified By: Adam Rodgers
Description: Angular Material - Navigation and Layout
             Angular Material - Data Tables
             Angular Material - Dialogs
             In-n-Out-Books Final Version
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
Error fix:
    https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
*/

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Array<IBook> = [];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe((res) => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function (author) {
              return author.name;
            });
          }

          this.books.push({
            isbn: res[key].details.isbn_13
              ? res[key].details.isbn_13
              : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle
              ? res[key].details.subtitle
              : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    this.book = this.books.find((book) => book.isbn === isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px',
    });
    console.log(this.book);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
