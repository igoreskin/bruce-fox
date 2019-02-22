import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // providers: [TableService]
})

export class TableComponent implements OnInit {

  constructor(private httpService: HttpClient, private tableService: TableService) { }
  quoteinfo: any;
  quote: string;


  ngOnInit() {
    this.tableService.getData();
    this.quoteinfo = this.tableService.quoteinfo;
  }

  onClick() {
    console.log("Clicked!!!!")
  }

  getQuote(num) {
    this.quote = this.quoteinfo[num];
    console.log(this.quote)
  }

  statusClick(event) {
    event.preventDefault();
    console.log(event.target.value)
  }

  // getDate() {
  //   $('#datetimepicker1').datetimepicker();
  // }

}
