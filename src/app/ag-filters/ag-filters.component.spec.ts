import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgFiltersComponent } from './ag-filters.component';

describe('AgFiltersComponent', () => {
  let component: AgFiltersComponent;
  let fixture: ComponentFixture<AgFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
