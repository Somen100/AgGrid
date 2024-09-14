import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ag-grid-customised-header',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, AgGridAngular, ReactiveFormsModule],
  templateUrl: './ag-grid-customised-header.component.html',
  styleUrl: './ag-grid-customised-header.component.css'
})
export class AgGridCustomisedHeaderComponent implements OnInit{

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
    { field: "name", headerName: 'Name' },
    { field: "username",  headerName: 'User Name' },
    { field: "email",  headerName: 'E-mail' },
    { field: "phone",  headerName: 'Phone No' }
  ];

  defaultColDef = {
    flex:1,
    minWidth:100
  }
}


