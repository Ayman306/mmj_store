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

@Component({
  selector: 'app-cart-model',
  standalone: true,
  imports: [CommonModule, MatIconModule, CartProductCardComponent],
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
      title: 'Product 1',
      price: 100,
      quantity: 1,
    },
    {
      title: 'Product 2',
      price: 200,
      quantity: 2,
    },
    {
      title: 'Product 3',
      price: 300,
      quantity: 3,
    },
    {
      title: 'Product 4',
      price: 400,
      quantity: 4,
    },
  ];
  modalRef!: BsModalRef;
  constructor(public dialogRef: MatDialogRef<CartModelComponent>) {}

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
  }
}
