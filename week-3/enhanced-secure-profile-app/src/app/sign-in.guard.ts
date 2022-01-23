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

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
