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

import { WishlistCreateComponent } from './wishlist-create.component';

describe('WishlistCreateComponent', () => {
  let component: WishlistCreateComponent;
  let fixture: ComponentFixture<WishlistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishlistCreateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
