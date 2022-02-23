/*
Title: 
    Exercise 5.2
    Exercise 5.3
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
             In-n-Out-Books Final Version
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959',
  ];

  getBooks() {
    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get('https://openlibrary.org/api/books', {
      params: params,
    });
  }
}
