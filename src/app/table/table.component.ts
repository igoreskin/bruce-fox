import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  quoteinfo: string[];


  ngOnInit() {
    // localStorage.clear();

    if(localStorage.length == 0){
      alert("Please refresh the page to load the data!")

      this.httpService.get("../assets/seed-data.json").subscribe(
        data => {
          this.quoteinfo = data as string[];
          console.log(this.quoteinfo[0]);
          console.log(JSON.stringify(this.quoteinfo))
          localStorage.setItem('quotes', JSON.stringify(this.quoteinfo))
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
      // localStorage.setItem('quotes', JSON.stringify(this.quoteinfo))

      // $.getJSON("../../seed-data.json", function(json) {
      //     localStorage.setItem('quoteinfo', JSON.stringify(json))
      // });
    } else {
      console.log(localStorage.length)
    }
  }

}
