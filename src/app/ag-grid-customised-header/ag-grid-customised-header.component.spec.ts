import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridCustomisedHeaderComponent } from './ag-grid-customised-header.component';

describe('AgGridCustomisedHeaderComponent', () => {
  let component: AgGridCustomisedHeaderComponent;
  let fixture: ComponentFixture<AgGridCustomisedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridCustomisedHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridCustomisedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
