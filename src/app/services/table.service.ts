import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpService: HttpClient) { }
  quoteinfo: any;

  getData() {
    // localStorage.clear();

    if(localStorage.length == 0){
      alert("Please refresh the page to load the data!")

      this.httpService.get("../assets/seed-data.json").subscribe(
        data => {
          this.quoteinfo = data as string[];
          localStorage.setItem('quotes', JSON.stringify(this.quoteinfo))
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
    } else {
      this.quoteinfo = JSON.parse(localStorage.getItem('quotes'));
      
    }
  }

  // updateData(object, i) {
  //   this.quoteinfo.splice(i, 1, object);
  //   localStorage.setItem('quotes', JSON.stringify(this.quoteinfo));
  // }

}
