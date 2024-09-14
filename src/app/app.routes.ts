import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridCustomisedHeaderComponent } from './ag-grid-customised-header/ag-grid-customised-header.component';
import { AppComponent } from './app.component';
import { AgGridtestComponent } from './ag-gridtest/ag-gridtest.component';
import { AgGridCellRendererComponent } from './ag-grid-cell-renderer/ag-grid-cell-renderer.component';
import { AgFiltersComponent } from './ag-filters/ag-filters.component';
import { AgExportComponent } from './ag-export/ag-export.component';
import { AgRowSelectionComponent } from './ag-row-selection/ag-row-selection.component';
import { PaginationComponent } from './pagination/pagination.component';

export const routes: Routes = [
  { path: '', component: AgGridtestComponent },
  { path: 'agGridDefault', component: AgGridtestComponent },
  { path: 'agGridCustomisedHeaderComponent', component: AgGridCustomisedHeaderComponent },
  { path: 'agGridCellRenderer', component:AgGridCellRendererComponent},
  { path: 'agGridFilters', component:AgFiltersComponent},
  { path: 'agExport', component:AgExportComponent},
  { path: 'agRowSelection', component:AgRowSelectionComponent},
  { path: 'agPagination', component:PaginationComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
