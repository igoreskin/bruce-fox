import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EntryformService } from '../services/entryform.service';

@Component({
  selector: 'app-entryform',
  templateUrl: './entryform.component.html',
  styleUrls: ['./entryform.component.css']
})
export class EntryformComponent implements OnInit {

  constructor(private entryformService: EntryformService) {}

  @ViewChild('f') entryForm: NgForm;

  entryData: any;

  quotetype = '';
  quotenumber = '';
  tasktype = '';
  contact = '';
  quote = '';
  duedate = '';
  task = '';
  submitted = false;

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  onSubmit() {
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

    // let n = local.get
    // n.push(this.entryData);
    // localStorage.setit('',json.)


    this.entryformService.getnewdata(this.entryData);


    // alert(this.entryData.quotenumber);

    this.entryForm.reset();
  }

  

  ngOnInit() {
  }

}
