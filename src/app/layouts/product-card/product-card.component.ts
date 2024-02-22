/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/pages/product/service/productapi.service';
import { UserService } from 'src/app/pages/user/service/user.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: any;
  @Output() productId = new EventEmitter();
  @Output() removeWishList = new EventEmitter();
  @Output() cartValue = new EventEmitter();
  isHovered = false;
  wishlistPage = false;
  user = this.userService.getUserSession();
  constructor(
    private router: Router,
    private productApiService: ProductapiService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    if (this.router.url === '/product/wishlist') {
      this.wishlistPage = true;
    }
  }
  getImage() {
    if (this.product.product_images) {
      const images = this.product?.product_images?.split(',');
      return images[0].trim(); // Use trim() to remove any leading or trailing spaces
    } else {
      return '';
    }
  }
  // Method to add the 'active' class
  productFunc(index: any) {
    this.router.navigate(['/product/tshirt'], { queryParams: { id: index } });
  }
  wishlist(id: any, wish: boolean) {
   this.loginCheck()
    this.product.in_wishlist = !wish;
    const data = {
      customer_id: this.user.customer_id,
      product_id: id,
    };
    if (wish) {
      this.productApiService
        .deleteWishList(data.customer_id, data.product_id)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      this.productApiService.addWishList(data).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  cart(id: any, cart: boolean) {
    this.loginCheck()
    if (cart) {
      const data = {
        customer_id: this.userService.getUserSession().customer_id,
        product_id: id,
        quantity: 1,
      };
      this.productApiService
        .deleteSingleCart(data.customer_id, data.product_id)
        .subscribe({
          next: (res) => {
            this.product.in_cart = !cart;
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      const data = {
        customer_id: this.userService.getUserSession().customer_id,
        product_id: id,
        quantity: 1,
      };
      this.productApiService.addCart(data).subscribe({
        next: (res) => {
          this.product.in_cart = !cart;
          console.log(res);
        },
        error: (err) => {
          console.log(err);
          this.router.navigateByUrl('/login');
        },
      });
    }
  }
  remove(id: any) {
    this.removeWishList.emit(id);
  }
  loginCheck(){
    if(!this.user){
      this.router.navigateByUrl('/login')
    }else{
      return
    }
  }
}
