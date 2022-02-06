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

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
