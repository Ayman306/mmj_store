import {
  AfterViewInit,
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

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, MatSelectModule],
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
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
  filterBy(type: string) {
    console.log(type, 'filter');
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
