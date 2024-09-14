import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'; // Column Definition Type Interface
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-ag-row-selection',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, AgGridAngular, ReactiveFormsModule],
  templateUrl: './ag-row-selection.component.html',
  styleUrl: './ag-row-selection.component.css'
})
export class AgRowSelectionComponent implements OnInit{
  private gridApi!: GridApi<any>;
  userList: any|any[]=[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      console.log("res",res);
      this.userList = res;
    });
  }


  // checkboxSelection:true  <== is only for single selection
  // colDefs: ColDef[] = [
  //   { field: "id", headerName: 'User Id', checkboxSelection:true },
  //   { field: "username",  headerName: 'User Name', filter:true , editable:true},
  //   { field: "email",  headerName: 'E-mail', editable:true },
  //   { field: "phone",  headerName: 'Phone No' , filter:true, editable:true},

  //   //formatted data :cell-renderering
  //   { field: "id", headerName: 'Formatted User Id',
  //   cellRenderer:(item:any)=>{ return "EMP-" + item.value}, editable:true
  //   },

  // ];

  // headerCheckboxSelection:true  <== is only for SELECT ALL
  colDefs: ColDef[] = [
    { field: "id", headerName: 'User Id', checkboxSelection:true, headerCheckboxSelection:true },
    { field: "username",  headerName: 'User Name', filter:true , editable:true},
    { field: "email",  headerName: 'E-mail', editable:true },
    { field: "phone",  headerName: 'Phone No' , filter:true, editable:true},

    //formatted data :cell-renderering
    { field: "id", headerName: 'Formatted User Id',
    cellRenderer:(item:any)=>{ return "EMP-" + item.value}, editable:true
    },

  ];


  defaultColDef = {
    flex:1,
    minWidth:100
  }


  onBtExport() {
    this.gridApi.exportDataAsCsv();
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api; // accessing the control
  }

  // multiple  selection (assign this to rowSelection property in html)
  public rowSelection: "single" | "multiple" = "multiple";
}



