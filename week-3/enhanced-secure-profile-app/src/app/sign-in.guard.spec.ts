/*
Title: 
    Exercise 3.4
Author: 
    Adam Rodgers
Date: 
    01/22/2022
Modified By: Adam Rodgers
Description: Guarding Routes in Angular
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
