import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AgGridtestComponent } from './ag-gridtest/ag-gridtest.component';
import { AgGridCustomisedHeaderComponent } from './ag-grid-customised-header/ag-grid-customised-header.component';
import { CommonModule } from '@angular/common';
import { AgGridCellRendererComponent } from './ag-grid-cell-renderer/ag-grid-cell-renderer.component';
import { AgFiltersComponent } from './ag-filters/ag-filters.component';
import { AgExportComponent } from './ag-export/ag-export.component';
import { AgRowSelectionComponent } from './ag-row-selection/ag-row-selection.component';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AgGridtestComponent, RouterLink,AgGridCustomisedHeaderComponent,
    CommonModule,AgGridCellRendererComponent, AgFiltersComponent, AgExportComponent, AgRowSelectionComponent,
    PaginationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agGridTest';
}
