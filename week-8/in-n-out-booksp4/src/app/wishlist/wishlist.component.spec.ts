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

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishlistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
