import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgRowSelectionComponent } from './ag-row-selection.component';

describe('AgRowSelectionComponent', () => {
  let component: AgRowSelectionComponent;
  let fixture: ComponentFixture<AgRowSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgRowSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgRowSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
