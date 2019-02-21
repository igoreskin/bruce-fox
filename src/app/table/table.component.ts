import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService]
})

export class TableComponent implements OnInit {

  constructor(private httpService: HttpClient, private tableService: TableService) { }
  quoteinfo: any;


  ngOnInit() {
    this.tableService.getData();
    this.quoteinfo = this.tableService.quoteinfo;
    // localStorage.clear();

    // if(localStorage.length == 0){
    //   alert("Please refresh the page to load the data!")

    //   this.httpService.get("../assets/seed-data.json").subscribe(
    //     data => {
    //       this.quoteinfo = data as string[];
    //       console.log(this.quoteinfo);
    //       console.log(this.quoteinfo[0]);
    //       console.log(JSON.stringify(this.quoteinfo))
    //       localStorage.setItem('quotes', JSON.stringify(this.quoteinfo))
    //     },
    //     (err: HttpErrorResponse) => {
    //       console.log(err.message);
    //     }
    //   )
    // } else {
    //   console.log(localStorage.length)
    //   this.quoteinfo = JSON.parse(localStorage.getItem('quotes'));
    //   console.log(this.quoteinfo);
      
    // }
  }

}
