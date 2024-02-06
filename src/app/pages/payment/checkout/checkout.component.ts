import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from 'src/app/shared/model/order-detail/order-detail.component';
import { NgIcon } from '@ng-icons/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from 'src/app/shared/model/address/address.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, OrderDetailComponent, NgIcon],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(private dialog: MatDialog) {}

  orderDetail = {
    total: '61.00',
    delivery: '56.00',
    saving: '5.00',
    bagTotal: '59.99',
    policy: false,
  };
  orderItem = [
    {
      image: '../../../../assets/productImage/productImage1.jpeg',
      title: 'WAISTCOAT WITH CONTRAST PIPING',
      price: '$24.99',
      quantity: 3,
    },
    {
      image: '../../../../assets/productImage/productImage1.jpeg',
      title: 'WAISTCOAT WITH CONTRAST PIPING',
      price: '$24.99',
      quantity: 3,
    },
    {
      image: '../../../../assets/productImage/productImage1.jpeg',
      title: 'WAISTCOAT WITH CONTRAST PIPING',
      price: '$24.99',
      quantity: 3,
    },
    {
      image: '../../../../assets/productImage/productImage1.jpeg',
      title: 'WAISTCOAT WITH CONTRAST PIPING',
      price: '$24.99',
      quantity: 3,
    },
  ];
  order() {
    console.log(this.orderDetail);
  }
  editAddress() {
    this.dialog.open(AddressComponent, {
      data: {
        name: 'Ayman',
        street: '2nd Cross opppsite to homestore',
        city: 'Cairo',
        state: 'Egypt',
        country: 'Egypt',
        postalCode: '12345',
        phone: '9741025256',
        email: 'ayman@gmail.com',
        update: true,
      },
    });
  }
}
