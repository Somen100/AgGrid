import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef,RowClassRules, CellClassRules, ModuleRegistry,ClientSideRowModelModule } from 'ag-grid-community'; // Column Definition Type Interface
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { API_DATA_CONFIG } from '../const/app.const';

ModuleRegistry.registerModules([ClientSideRowModelModule]);
@Component({
  selector: 'app-ag-filters',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, AgGridAngular, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './ag-filters.component.html',
  styleUrl: './ag-filters.component.css'
})
export class AgFiltersComponent implements OnInit{
 API_DATA_CONFIG =API_DATA_CONFIG;
  userList: any|any[]=[];
  countriesData: any|any[]=[];
  usaDemographicData: any|any[]=[];

  showUser=true;
  showUSADemography=false;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getUser();
    this.getRestCountries();
    this.getUSADemography();
  }

  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      console.log("res",res);
      this.userList = res;
    });
  }

  getRestCountries(){
    this.http.get('https://restcountries.com/v3.1/independent?status=true') //taken from https://restcountries.com/
    .subscribe((res)=>{
      console.log("countries",res);
      this.countriesData = res;
    });
  }

  getUSADemography(){
    this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population') //taken from https://restcountries.com/
    .subscribe((res:any)=>{
      console.log("Demography",res.data);
      this.usaDemographicData = res.data;
    });
  }
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "id", headerName: 'User Id', maxWidth: 100, filter: "agNumberColumnFilter"  },
    { field: "username",  headerName: 'User Name', filter: "agMultiColumnFilter"},
    { field: "email",  headerName: 'E-mail', filter: "agTextColumnFilter" },
    { field: "phone",  headerName: 'Phone No' , filter: "agSetColumnFilter" },

    //formatted data :cell-renderering
    { field: "id", headerName: 'Formatted User Id',
    cellRenderer:(item:any)=>{ return "EMP-" + item.value}
    },

  ];

  // USA Demographic data colDef.
  colDefsUSAPop: ColDef[] = [
    { field: "ID Nation",  },
    { field: "ID Year",  filter: "agSetDateFilter" },
    { field: "Nation",  filter:true },
    { field: "Population", filter:true},

  ];

  defaultColDef = {
    flex:1,
    minWidth:100
  }
  // public rowClassRules: RowClassRules = {
  //   // apply red to Ford cars
  //   "rag-red": (params) => params.data.Population === 322903030,
  // };
  public rowClassRules: RowClassRules = {
    "rag-red": (params) => {
      console.log("params",params); // Log the entire params object
      return params.data["Population"] !== 322903030;
    },
  };

  ragCellClassRules: CellClassRules = {
    // apply green to electric cars
    "rag-green": (params) => params.data["ID Nation"] === "01000US",
  };
  // extra: setting api config

  updateConfig(option: keyof typeof API_DATA_CONFIG, value: boolean) {
    Object.keys(API_DATA_CONFIG).forEach(key => {
      API_DATA_CONFIG[key as keyof typeof API_DATA_CONFIG] = key === option ? value : false;
    });
  }

  selectAPIData(e: any) {
    console.log("selectedapi", e.target.value);
    const selectedOption = e.target.value as keyof typeof API_DATA_CONFIG;
    this.updateConfig(selectedOption, true);
  }

}
