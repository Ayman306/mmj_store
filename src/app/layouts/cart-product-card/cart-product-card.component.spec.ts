import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductCardComponent } from './cart-product-card.component';

describe('CartProductCardComponent', () => {
  let component: CartProductCardComponent;
  let fixture: ComponentFixture<CartProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CartProductCardComponent]
    });
    fixture = TestBed.createComponent(CartProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
