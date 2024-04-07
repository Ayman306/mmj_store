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
import { Observable } from 'rxjs';
import { ProductapiService } from '../service/productapi.service';
import { HttpParams } from '@angular/common/http';

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
  categoryType = '';

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private productApi:ProductapiService
  ) {}
  products$!: Observable<any>;
  latest$!: Observable<any>;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      // Access your query parameters here
      this.categoryType = params.category;
    });
    this.getProducts(this.pageSize)
    this.getLatest()
  }
  private getProductsParams(extraParams?: {[key: string]: any}): HttpParams {
  let params = new HttpParams();
    // Always include category_id if it's not undefined or an empty string
    if (this.categoryType) {
      params = params.append('category_id', this.categoryType);
    }
    // Include additional parameters if provided
    if (extraParams) {
      Object.keys(extraParams).forEach(key => {
        // This ensures that even if extraParams contains category_id, it won't override
        // the existing value as it's already set if this.type is truthy.
        if (!params.has(key)) {
          params = params.append(key, extraParams[key]);
        }
      });
    }
    return params;
  }

  getProducts(pageSize:any) {
    const params = this.getProductsParams(pageSize);
    this.products$ = this.productApi.getProducts(params);
  }

  getLatest() {
    const extraParams = { page: 1, page_size: 4 };
    const params = this.getProductsParams(extraParams);
    this.latest$ = this.productApi.getProducts(params);
  }
  pageSize={
    page:1,
    page_size:10,
    type:'',
    sort_by:''
  }

  onScrollDown(){
    console.log('scroled');
    this.pageSize.page +=1;
    this.getProducts(this.pageSize)

  }
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
