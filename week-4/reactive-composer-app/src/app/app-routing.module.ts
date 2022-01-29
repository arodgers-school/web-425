/*
Title: 
    Exercise 3.2
Author: 
    Adam Rodgers
Date: 
    01/23/2022
Modified By: Adam Rodgers
Description: Enhanced Composer App in Angular
Resources:
    Bellevue University WEB425 Github Repo
    Prof Krasso's YouTube
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/composer-list', pathMatch: 'full' },
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
