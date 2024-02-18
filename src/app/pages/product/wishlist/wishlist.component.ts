import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
import { Observable } from 'rxjs';
import { ProductapiService } from '../service/productapi.service';
import { UserService } from '../../user/service/user.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(
    private productApi: ProductapiService,
    private userService: UserService
  ) {}
  product$!: Observable<any>;
  empty = false;
  userDetail:any
  ngOnInit(): void {
    this.getProduct();
    this.userDetail = this.userService.getUserSession();
  }
  getProduct() {
    const user: any = this.userService.getUserSession();
    if (user) {
      this.product$ = this.productApi.getAllWishList(user.customer_id);
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
}
