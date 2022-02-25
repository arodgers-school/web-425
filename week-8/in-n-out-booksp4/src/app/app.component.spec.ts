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

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'in-n-out-booksp1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('in-n-out-booksp1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'in-n-out-booksp1 app is running!'
    );
  });
});
