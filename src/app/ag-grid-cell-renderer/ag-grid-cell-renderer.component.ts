import { Component, OnInit } from '@angular/core';
import {  JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, } from 'ag-grid-community'; // Column Definition Type Interface
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ag-grid-cell-renderer',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, AgGridAngular, ReactiveFormsModule],
  templateUrl: './ag-grid-cell-renderer.component.html',
  styleUrl: './ag-grid-cell-renderer.component.css'
})
export class AgGridCellRendererComponent implements OnInit{

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

     //formatted data by :cell-renderering
     { field: "id", headerName: 'Formatted User Id',
      cellRenderer:(item:any)=>{
        if(item.value<6){
         return "EMP-" + item.value
        }
        else {
          return  `<span style="color: green;">Active</span>`;
        }
      }
      },


    { field: "id", headerName: 'User Id (with flex2)', flex: 2 },
    { field: "username",  headerName: 'User Name', flex: 1 },

     //formatted data by :valueFormatter
    { field: "email",  headerName: 'E-mail',
      valueFormatter:(item:any)=>{ return "email is -" + item.value}
    },

        //formatted data by :valueGetter
    { field: "phone",  headerName: 'Phone No', valueGetter: p=>p.data.phone + '%' },

    //formatted data by :cell-renderering
    { field: "id", headerName: 'Formatted User Id',
    cellRenderer:(item:any)=>{ return "EMP-" + item.value}
    },


  ];

  defaultColDef = {
    flex:1,
    minWidth:100
  }
}


