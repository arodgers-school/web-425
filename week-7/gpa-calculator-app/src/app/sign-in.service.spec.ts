/*
Title: 
    Exercise 7.2
Author: 
    Adam Rodgers
Date: 
    02/19/2022
Modified By: Adam Rodgers
Description: Reactive Forms
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
