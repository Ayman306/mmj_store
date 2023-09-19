import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModelComponent } from './search-model.component';

describe('SearchModelComponent', () => {
  let component: SearchModelComponent;
  let fixture: ComponentFixture<SearchModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchModelComponent]
    });
    fixture = TestBed.createComponent(SearchModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
