import { Component } from '@angular/core';
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
export class CartModelComponent {
  public products = [
    {
      id: 1,
      product_title: 'Product 1',
      product_description: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      price: 100,
      quantity: 1,
    },
    {
      id: 1,
      product_title: 'Product 2',
      product_description: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      price: 200,
      quantity: 2,
      mrp: 150,
      disc: true,
    },
    {
      id: 1,
      product_title: 'Product 3',
      product_description: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      price: 300,
      quantity: 3,
    },
    {
      id: 1,
      product_title: 'Product 4',
      product_description: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      price: 400,
      quantity: 4,
      mrp: 150,
      disc: true,
    },
  ];

  orderDetail = {
    total: '61.00',
    delivery: '56.00',
    saving: '5.00',
    bagTotal: '59.99',
    policy: true,
  };
  modalRef!: BsModalRef;
  constructor(
    public dialogRef: MatDialogRef<CartModelComponent>,
    private route: Router
  ) {}

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
}
