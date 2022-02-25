/*
Title: 
    Exercise 8.2
Author: 
    Adam Rodgers
Date: 
    02/23/2022
Modified By: Adam Rodgers
Description: In-n-Out-Books Final Version
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsDialogComponent } from './book-details-dialog.component';

describe('BookDetailsDialogComponent', () => {
  let component: BookDetailsDialogComponent;
  let fixture: ComponentFixture<BookDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
