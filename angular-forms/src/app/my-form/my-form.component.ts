import { Component, OnInit, ViewChild } from '@angular/core';

import { MyAppForm } from "../my-app-form";
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  MyAppForm = new MyAppForm();

  listOfFormItems: MyAppForm[] = [];

  displayedColumns: string[];

  dataSource;

  constructor() {
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  onSubmit() {
    let listItem = Object.assign({}, this.MyAppForm);
    this.listOfFormItems = [...this.listOfFormItems, listItem];

    this.dataSource = new MatTableDataSource(this.listOfFormItems);
    this.displayedColumns = ['name', 'jobTitle', 'phone', 'company'];
  }
}
