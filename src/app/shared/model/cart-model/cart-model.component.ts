import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CartProductCardComponent } from 'src/app/layouts/cart-product-card/cart-product-card.component';
import { Router } from '@angular/router';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { SharedService } from '../../shared-service/shared.service';
import { UserService } from 'src/app/pages/user/service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-model',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CartProductCardComponent,
    OrderDetailComponent,
  ],
  templateUrl: './cart-model.component.html',
  styleUrls: ['./cart-model.component.scss'],
  animations: [
    trigger('slideInFromRight', [
      state('void', style({ transform: 'translateX(100%)' })),
      transition('void => *', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class CartModelComponent implements OnInit{
  modalRef!: BsModalRef;
  constructor(
    public dialogRef: MatDialogRef<CartModelComponent>,
    private route: Router,
    private sharedService:SharedService,
    private userService:UserService
  ) {}
  ngOnInit(): void {
this.getCartItem()
  }
  getCartItem(){
    // this.cartItems$= this.sharedService.getCartItem( this.userService.getUserSession().customer_id);
    this.sharedService.getCartItem( this.userService.getUserSession().customer_id).subscribe((res)=>{
      this.cartItems = res.data
    },(err)=>{
      console.log(err);

    },()=>{
      this.setOrderDetail()
    });

  }
  cartItems:any=[]
  // cartItems$!:Observable<any>

  orderDetail:any = {};
  setOrderDetail(){
    this.orderDetail={
      total:0,
    delivery: 56.00,
    saving: 0,
    bagTotal: 0,
    }
    console.log(this.cartItems);
    // console.log(this.cartItems?.product.offer_price ?( this.cartItems.product.offer_price * this.cartItems.quantity) + this.orderDetail.total : (this.cartItems.product.price * this.cartItems.quantity) + this.orderDetail.total);

    this.cartItems.map((res:any)=>{
      this.orderDetail={
        bagTotal: (res.product.price * res.quantity) + this.orderDetail.bagTotal,
        delivery: 56.00,
        saving: res?.product.offer_price ? (res.product.price * res.quantity) - (res.product.offer_price * res.quantity) : this.orderDetail.saving,
        total: 0,
      }

    })
    this.orderDetail.total = this.orderDetail.bagTotal - this.orderDetail.saving + this.orderDetail.delivery
  }
  close() {
    this.dialogRef.close();
  }
  // constructor() {
  //   console.log('heyyyy');
  // }

  // close() {
  //   this.modalRef.hide();
  // }
  checkout() {
    console.log('Checkout');
    this.route.navigate(['/checkout']);
    this.close();
  }
  shop(){
    this.route.navigate(['/product']);
    this.close()
  }
}
