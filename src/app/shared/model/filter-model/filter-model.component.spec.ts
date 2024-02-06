import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterModelComponent } from './filter-model.component';

describe('FilterModelComponent', () => {
  let component: FilterModelComponent;
  let fixture: ComponentFixture<FilterModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterModelComponent]
    });
    fixture = TestBed.createComponent(FilterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
