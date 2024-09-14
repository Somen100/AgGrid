import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridtestComponent } from './ag-gridtest.component';

describe('AgGridtestComponent', () => {
  let component: AgGridtestComponent;
  let fixture: ComponentFixture<AgGridtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridtestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
