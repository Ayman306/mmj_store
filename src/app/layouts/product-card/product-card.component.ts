/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,NgIconComponent],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: any;
  @Output() productId = new EventEmitter();
  isHovered = false;

  // Method to add the 'active' class
  addActiveClass() {
    this.isHovered = true;
  }

  // Method to remove the 'active' class
  removeActiveClass() {
    this.isHovered = false;
  }
  productFunc(id: any) {
    this.productId.emit(id);
  }
  wishlist(wish: boolean) {
    // call the wishlist api
    this.product.wishlist = !wish;
  }
  cart(cart: boolean) {
    // call the cart api
    this.product.cart = !cart;
  }
}
