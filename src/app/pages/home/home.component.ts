import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideModule } from 'ngx-splide';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
import { CategoryCardComponent } from 'src/app/layouts/category-card/category-card.component';
import { Router } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { ReviewsComponent } from 'src/app/shared/shared-component/reviews/reviews.component';
import { SliderComponent } from 'src/app/shared/shared-component/slider/slider.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgxSplideModule,
    ProductCardComponent,
    CategoryCardComponent,
    NgIconComponent,
    ReviewsComponent,
    SliderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private route: Router) {}
  firstSlider = [
    {
      media: 'video',
      video:
        '../../../../assets/home/mixkit-woman-modeling-a-short-black-dress-805-medium.mp4',
      tag: 'atheltic wear',
      contentHead: 'Athletic wear that keeps up with your hustle.',
      content: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      btn: 'Shop Collection',
    },
    {
      media: 'image',
      img: '../../../../assets/home/wardrobe.jpg',
      tag: 'atheltic wear',
      contentHead: 'Athletic wear that keeps up with your hustle.',
      content: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      btn: 'Shop Collection',
    },
  ];
  secondSlider = [
    {
      media: 'image',
      img: '../../../../assets/home/adventureImg.jpg',
      tag: 'atheltic wear',
      contentHead: 'Athletic wear that keeps up with your hustle.',
      content: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      btn: 'Shop Collection',
    },
  ];
  product = [
    {
      img: '../../../assets/tshirt/tshirt2.jpg',
      title: 'Mangaluru Tshirts',
      price: 1400,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: true,
      wishlist: true,
    },
    {
      img: '../../../assets/tshirt/tshirt3.png',
      title: 'IYI Tshirts',
      price: 1500,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: false,
      wishlist: false,
    },
    {
      img: '../../../assets/tshirt/tshirt4.png',
      title: 'Rose Tshirts',
      price: 1500,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: false,
      wishlist: true,
    },
    {
      img: '../../../assets/tshirt/tshirt5.png',
      title: 'Basics Tshirts',
      price: 1500,
      des: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      cart: true,
      wishlist: false,
    },
  ];
  navigateTo(type: string) {
    // if (type === 'allProduct') {
    this.route.navigate(['/product']);
    console.log(type);

    // }
  }
  productRoute(index: number) {
    this.route.navigate(['/product/tshirt'], { queryParams: { id: index } });
  }
}
