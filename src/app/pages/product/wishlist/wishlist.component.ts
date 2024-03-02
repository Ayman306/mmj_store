import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
import { ProductapiService } from '../service/productapi.service';
import { UserService } from '../../user/service/user.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit, OnDestroy {
  constructor(
    private productApi: ProductapiService,
    private userService: UserService
  ) {}
  subscribedData!: any;
  product: any = [];
  empty = false;
  userDetail: any;
  ngOnInit(): void {
    this.getProduct();
    this.userDetail = this.userService.getUserSession();
  }
  getProduct() {
    const user: any = this.userService.getUserSession();
    if (user) {
      this.subscribedData = this.productApi
        .getAllWishList(user.customer_id)
        .subscribe((data) => {
          this.product = data.data;
        });
    } else {
      this.empty = true;
    }
  }

  removeWishList($event: any) {
    this.productApi
      .deleteWishList(this.userService.getUserSession().customer_id, $event)
      .subscribe({
        next: () => {
          this.getProduct();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  ngOnDestroy(): void {
    this.subscribedData.unsubscribe();
  }
}
