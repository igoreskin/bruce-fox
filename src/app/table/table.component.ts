import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // localStorage.clear();

    if(localStorage.length == 0){
      alert("Please refresh the page to load the data!")
      $.getJSON("../../seed-data.json", function(json) {
          localStorage.setItem('quoteinfo', JSON.stringify(json))
      });
  }
  }

}
