import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entryform',
  templateUrl: './entryform.component.html',
  styleUrls: ['./entryform.component.css']
})
export class EntryformComponent implements OnInit {
  @ViewChild('f') entryForm: NgForm;

  quotetype = '';
  quotenumber = '';
  tasktype = '';
  contactname = '';
  quote = '';
  duedate = '';
  taskdescription = '';
  submitted = false;

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  onSubmit() {
    this.submitted = true;
    
    this.quotetype = this.entryForm.value.quotetype;
    this.quotenumber = this.entryForm.value.quotenumber;
    this.tasktype = this.entryForm.value.tasktype;
    this.contactname = this.entryForm.value.contactname;
    this.quote = this.entryForm.value.quote;
    this.duedate = this.entryForm.value.duedate;
    this.taskdescription = this.entryForm.value.taskdescription;

    this.entryForm.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
