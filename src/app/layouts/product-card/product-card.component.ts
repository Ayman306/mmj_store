/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/pages/product/service/productapi.service';
import { UserService } from 'src/app/pages/user/service/user.service';
import { ToastrService } from 'ngx-toastr';import { SizeQtyComponent } from 'src/app/shared/model/size-qty/size-qty.component';
import { MatDialog } from '@angular/material/dialog';

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
    private userService: UserService,
    private toaster:ToastrService,
    public dialog: MatDialog
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
    const userData= this.loginCheck()
    if(userData){
    const data = {
      customer_id: this.user.customer_id,
      product_id: id,
    };
    if (wish) {
      this.productApiService
        .deleteWishList(data.customer_id, data.product_id)
        .subscribe({
          next: (res) => {
            this.product.in_wishlist = !wish;
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      this.productApiService.addWishList(data).subscribe({
        next: (res) => {
          this.product.in_wishlist = !wish;
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  }
  sizeQty:any={}
  cart(product:any) {
    this.loginCheck()
   this.openSize(product)
  }

  addOrRemoveFromCart(product:any){
    const data = {
      customer_id: this.userService.getUserSession().customer_id,
      product_id: product.product_id,
      quantity: this.sizeQty.quantity,
      size:this.sizeQty.size,
      status: product.in_cart ? 'remove' : 'add'
    };
      if (product.in_cart) {
        this.productApiService
          .deleteSingleCart(data)
          .subscribe({
            next: (res) => {
              this.product.in_cart = !product.in_cart;
              console.log(res);
            },
            error: (err) => {
              console.log(err);
            },
          });
      } else {
        this.productApiService.addCart(data).subscribe({
          next: (res) => {
            this.product.in_cart = !product.in_cart;
            console.log(res);
          },
          error: (err) => {
            console.log(err);
            this.toaster.error(err.message)
          },
        });
      }
  }

  openSize(productData:any) {
    console.log(productData);

  this.dialog.open(SizeQtyComponent, {
        panelClass: 'popUp',
        data: {
          allSize: productData.size,
          quantity: productData.quantity || 1,
          selectedSize:productData.size || ''
        },
      }).afterClosed().subscribe((res: any) => {
        this.sizeQty= res
        this.addOrRemoveFromCart(productData)
        return
          }
          );

        }


  remove(id: any) {
    this.removeWishList.emit(id);
  }
  loginCheck(){
    if (Object.keys(this.user).length === 0) {
      this.router.navigateByUrl('/login');
      return false
    }else{
      return true
    }
  }
}
