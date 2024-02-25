/* eslint-disable @angular-eslint/no-input-rename */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SizeQtyComponent } from 'src/app/shared/model/size-qty/size-qty.component';
import { ProductapiService } from 'src/app/pages/product/service/productapi.service';
import { UserService } from 'src/app/pages/user/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.scss'],
})
export class CartProductCardComponent {
  constructor(
    private dialog: MatDialog,
    private productApi: ProductapiService,
    private userService: UserService,
    private router: Router
  ) {}
  @Input() categoryItem!: any;
  @Output() removedFromCart = new EventEmitter<number>();
  @Output() closeModel = new EventEmitter<any>();
openSize() {
this.dialog.open(SizeQtyComponent, {
      panelClass: 'popUp',
      data: {
        size: this.categoryItem.product.size,
        quantity: this.categoryItem.quantity,
      },
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.productApi.addCart({
          customer_id: this.userService.getUserSession().customer_id,
          product_id: this.categoryItem.product.product_id,
          size: res.size,
          quantity: res.quantity,
        }).subscribe((data: any) =>{
          this.categoryItem.product.size = res.size;
          this.categoryItem.quantity = res.quantity;
        }
        );

      }
    });
  }
  removeFromCart(productId: any) {
    const userId = this.userService.getUserSession().customer_id;
    this.productApi.deleteSingleCart(userId, productId).subscribe(
      (res: any) => {
        console.log(res);
        this.removedFromCart.emit(productId);
        window.scrollTo(0, 0);
      },
      (err) => {
        console.error('Error in delete', err);
      }
    );
  }
  goToProduct() {
    this.router.navigateByUrl(
      `product/tshirt?id=${this.categoryItem.product.product_id}`
    );
    this.closeModel.emit(true);
  }
}
