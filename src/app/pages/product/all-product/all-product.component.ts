import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { SliderComponent } from 'src/app/shared/shared-component/slider/slider.component';
import { MatDialog } from '@angular/material/dialog';
import { FilterModelComponent } from 'src/app/shared/model/filter-model/filter-model.component';

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    MatSelectModule,
    SliderComponent,
  ],
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      // Access your query parameters here
      this.type = params.type;
    });
  }
  type = '';
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

  filter = [
    'Best Selling',
    'Alphabetically A-Z',
    'Alphabetically Z-A',
    'Price, High to Low',
    'Price Low to High',
    'Date old to new',
    'Date new to old',
  ];
  sliderContent = [
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
  filterBy(type: string) {
    const typeClass = type === 'filter' ? 'filterModel' : 'sortModel';
    this.dialog.open(FilterModelComponent, {
      panelClass: typeClass,
      position: {
        bottom: '0',
        right: '100%',
      },
      data: {
        filter: type,
      },
    });
    console.log(type, 'filter');
  }
  getslidercontent() {
    return this.sliderContent;
  }
  navigaToProduct(index: number) {
    this.route.navigate(['product/tshirt'], { queryParams: { id: index } });
  }
  productRoute(index: number) {
    this.route.navigate(['/product/tshirt'], { queryParams: { id: index } });
  }
  @ViewChild('targetDiv') targetDiv!: ElementRef;
  buttonVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    if (this.isElementInViewport(this.targetDiv.nativeElement)) {
      this.buttonVisible = true;
    } else {
      this.buttonVisible = false;
    }
  }

  isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
}
