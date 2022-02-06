/*
Title: 
    Exercise 5.2
    Exercise 5.3
Author: 
    Adam Rodgers
Date: 
    02/5/2022
    02/6/2022
Modified By: Adam Rodgers
Description: Angular Material - Navigation and Layout
             Angular Material - Data Tables
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

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}
