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

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
