import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
// import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';
// declare var $:any;

import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // providers: [TableService]
})

export class TableComponent implements OnInit {

  constructor(private httpService: HttpClient, private tableService: TableService) { }

  @ViewChild('f') entryForm: NgForm;

  entryData: any;

  idx: any;

  quotetype = '';
  quotenumber = '';
  tasktype = '';
  contact = '';
  quote = '';
  duedate = '';
  task = '';
  submitted = false;

  quoteinfo: any;
  quoterow: any;
  

  ngOnInit() {
    this.tableService.getData();
    this.quoteinfo = this.tableService.quoteinfo;
  }

  onClick() {
    console.log("Clicked!!!!")
  }

  getQuote(num) {
    this.quoterow = this.quoteinfo[num];
    console.log(this.quoterow);
    this.idx = num;
  }

  statusClick(event) {
    event.preventDefault();
    console.log(event.target.value)
  }

  onSubmit() {
    // debugger;
    // console.log(this.entryForm);  
    this.submitted = true;
    
    this.quotetype = this.entryForm.value.quotetype;
    this.quotenumber = this.entryForm.value.quotenumber;
    this.tasktype = this.entryForm.value.tasktype;
    this.contact = this.entryForm.value.contact;
    this.quote = this.entryForm.value.quote;
    this.duedate = this.entryForm.value.duedate;
    this.task = this.entryForm.value.task;

    this.entryData = {
      quotetype: this.quotetype,
      quotenumber: this.quotenumber,
      tasktype: this.tasktype,
      contact: this.contact,
      quote: this.quote,
      duedate: this.duedate,
      task: this.task
    }

    // console.log(this.entryData, this.idx)
    console.log(this.duedate)
    console.log(this.entryForm);
    this.quoteinfo[this.idx] = this.entryData;
    // debugger;
    localStorage.setItem('quotes', JSON.stringify(this.quoteinfo));
    // this.tableService.updateData(this.entryData, this.idx);
   
    $('#myModal').hide();
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    this.entryForm.reset();
    location.reload();
  }



}
