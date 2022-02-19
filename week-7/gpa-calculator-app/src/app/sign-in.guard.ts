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

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const sessionUser = this.cookieService.get('session_user');
    if (sessionUser) {
      console.log('true');
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      console.log('false');
      return false;
    }
  }
}
