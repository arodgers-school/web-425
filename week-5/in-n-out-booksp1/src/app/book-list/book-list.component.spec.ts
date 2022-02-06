/*
Title: 
    Exercise 5.2
Author: 
    Adam Rodgers
Date: 
    02/5/2022
Modified By: Adam Rodgers
Description: Angular Material - Navigation and Layout
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
