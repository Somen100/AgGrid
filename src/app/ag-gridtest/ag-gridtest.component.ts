import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ag-gridtest',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, AgGridAngular, ReactiveFormsModule],
  templateUrl: './ag-gridtest.component.html',
  styleUrl: './ag-gridtest.component.css'
})
export class AgGridtestComponent implements OnInit{

  userList: any|any[]=[];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      console.log("res",res);
      this.userList = res;
    });
  }

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "name" },
    { field: "username" },
    { field: "email" },
    { field: "phone" }
  ];

  defaultColDef = {
    flex:1,
    minWidth:100
  }
}


