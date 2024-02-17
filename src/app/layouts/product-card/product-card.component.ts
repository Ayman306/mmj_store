/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,NgIconComponent],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit{
  @Input() product!: any;
  @Output() productId = new EventEmitter();
  @Output() wishListValue = new EventEmitter();
  @Output() cartValue = new EventEmitter();
  isHovered = false;
wishlistPage=false
  constructor(private router: Router) { }
  ngOnInit(): void {
      // Check if the current route is '/wishlist'
    if (this.router.url === '/user/wishlist') {
      this.wishlistPage = true;
      console.log(this.wishlistPage,'wishlist page');

    }
    // this.getImage()
  }
  getImage() {
    if(this.product.product_images){
    const images = this.product?.product_images?.split(',');
    return images[0].trim(); // Use trim() to remove any leading or trailing spaces
    }else{
      return ''
    }
  }
  // Method to add the 'active' class
  productFunc(index: any) {
    this.router.navigate(['/product/tshirt'], { queryParams: { id: index } });
  }
  wishlist(id:any,wish: boolean) {
    this.wishListValue.emit({
      id,wish:wish
    })
  }
  cart(id:any,cart: boolean) {
    this.product.cart = !cart;
    this.cartValue.emit({
      id,cart:cart
    })
  }
  remove(id: any) {
    this.wishListValue.emit(id);
  }
}
