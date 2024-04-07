import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideModule } from 'ngx-splide';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
import { CategoryCardComponent } from 'src/app/layouts/category-card/category-card.component';
import { Router } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { ReviewsComponent } from 'src/app/shared/shared-component/reviews/reviews.component';
import { SliderComponent } from 'src/app/shared/shared-component/slider/slider.component';
import { Observable } from 'rxjs';
import { ProductapiService } from '../product/service/productapi.service';
import { HttpParams } from '@angular/common/http';
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
export class HomeComponent implements OnInit{
  constructor(private route: Router,private productApi:ProductapiService) {}
  firstSlider = [
    {
      media: 'video',
      video:
        'https://res.cloudinary.com/dosuseofq/video/upload/v1708564314/slider%20image/rkccgllyr5fziknk5irp.mp4',
      tag: 'atheltic wear',
      contentHead: 'Athletic wear that keeps up with your hustle.',
      content: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      btn: 'Shop Collection',
      link: '/product',
    },
    {
      media: 'image',
      img: 'https://res.cloudinary.com/dosuseofq/image/upload/v1708564304/slider%20image/qouaqufawujmbqwssreg.jpg',
      tag: 'atheltic wear',
      contentHead: 'Athletic wear that keeps up with your hustle.',
      content: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      btn: 'Shop Collection',
      link: '/product',
    },
  ];
  secondSlider = [
    {
      media: 'image',
      img: 'https://res.cloudinary.com/dosuseofq/image/upload/v1708564303/slider%20image/u7uiumdqjzee28wopkhj.jpg',
      tag: 'atheltic wear',
      contentHead: 'Athletic wear that keeps up with your hustle.',
      content: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      btn: 'Shop Collection',
    },
  ];
  latest$!: Observable<any>;
  topSeller$!: Observable<any>;

ngOnInit(): void {
    this.getLatest()
    this.getTopSeller()
}
getLatest(){
  let param= new HttpParams()
  param = param.append('page', '1')
  param = param.append('page_size', '4')
  this.latest$ = this.productApi.getProducts(param)
}
getTopSeller(){
  let param= new HttpParams()
  param = param.append('page', '1')
  param = param.append('page_size', '4')
  // param = param.append('top_seller', 'true')
  this.topSeller$ = this.productApi.getProducts(param)
}
viewAll(){
  this.route.navigate(['/product'])
}

}
