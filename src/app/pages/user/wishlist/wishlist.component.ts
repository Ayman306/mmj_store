import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  constructor(private route:Router){}
  product = [
    {
      img: '../../../assets/tshirt/tshirt2.jpg',
      product_title: 'Mangaluru Tshirts',
      price: 1400,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: true,
      wishlist: true,
    },
    {
      img: '../../../assets/tshirt/tshirt3.png',
      product_title: 'IYI Tshirts',
      price: 1500,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: false,
      wishlist: false,
    },
    {
      img: '../../../assets/tshirt/tshirt4.png',
      product_title: 'Rose Tshirts',
      price: 1500,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: false,
      wishlist: true,
    },
    {
      img: '../../../assets/tshirt/tshirt5.png',
      product_title: 'Basics Tshirts',
      price: 1500,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: true,
      wishlist: false,
    },
  ];

  removeWishList($event: any) {
    console.log($event,'removewishlist')
    }
}
