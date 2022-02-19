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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: '',
    });
  }

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage =
        'The student ID you entered is invalid.  Please try again.';
    }
  }
}
