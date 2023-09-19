import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartModelComponent } from 'src/app/shared/model/cart-model/cart-model.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.id = queryParams.get('id');
    });
  }
  id!: any;

  productImg = [
    '../../../../assets/productImage/productImage1.jpeg',
    '../../../../assets/productImage/productImage2.jpeg',
    '../../../assets/productImage/productImage3.jpeg',
    '../../../../assets/productImage/productImage4.jpeg',
    '../../../assets/productImage/productImage5.jpeg',
  ];
  product = [
    {
      img: 'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'RoadWays Tshirts',
      price: 1400,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: true,
      wishlist: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'RoadWays Tshirts',
      price: 1500,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: false,
      wishlist: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'RoadWays Tshirts',
      price: 1500,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: false,
      wishlist: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'RoadWays Tshirts',
      price: 1500,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: true,
      wishlist: false,
    },
  ];
  productRoute(index: number) {
    this.route.navigate(['/product/tshirt'], { queryParams: { id: index } });
  }
  addToCart() {
    console.log(this.id);
    this.dialog.open(CartModelComponent, {
      panelClass: 'right-hidden-dialog', // Apply custom CSS class
      position: {
        right: '0', // Start from the right
        top: '0',
      },
    });
  }
}
