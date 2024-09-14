import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgExportComponent } from './ag-export.component';

describe('AgExportComponent', () => {
  let component: AgExportComponent;
  let fixture: ComponentFixture<AgExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
