import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryformService {

  newdata: any;
  quotesArray: any;

  constructor(private httpService: HttpClient) { }

  getnewdata(object) {
    this.newdata = object;
    // console.log(this.newdata.duedate)
    // alert(this.newdata.duedate)
    this.quotesArray = JSON.parse(localStorage.getItem('quotes'));
    this.quotesArray.push(this.newdata);
    localStorage.setItem('quotes', JSON.stringify(this.quotesArray))
  
  }

}


