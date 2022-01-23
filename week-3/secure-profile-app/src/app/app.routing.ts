/*
Title: 
    Exercise 3.3
Author: 
    Adam Rodgers
Date: 
    01/22/2022
Modified By: Adam Rodgers
Description: Secure Profile App in Angular
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
