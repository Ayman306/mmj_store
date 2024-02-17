import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartModelComponent } from 'src/app/shared/model/cart-model/cart-model.component';
import { NgxSplideModule } from 'ngx-splide';
import { MatSelectModule } from '@angular/material/select';
import { NgIcon } from '@ng-icons/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductapiService } from '../service/productapi.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    NgxSplideModule,
    MatSelectModule,
    NgIcon,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private productApi:ProductapiService
  ) {}
  latest$!: Observable<any>;
  product$!: Observable<any>;
  size!: any;

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.id = queryParams.get('id');
    });
    this.getOtherProduct()
    this.getProduct()
    this.getSizes()
  }
  getOtherProduct(){
    let params = new HttpParams();
    params = params.append('page', '1');
    params = params.append('page_size', '4');
    this.latest$=this.productApi.getProducts(params)
  }
  getProduct(){
   this.product$ =this.productApi.getProductById(this.id)
  }
  getSizes() {
    this.product$.subscribe((res) => {
      // this.size = res.data.size;
      if(res.data.size.includes(',')){
        this.size = res.data.size.split(',')
      }else{
        this.size = [res.data.size]
      }
      console.log(res);

    });

  }

  id!: unknown;

  productImg = [
    '../../../../assets/productImage/productImage1.jpeg',
    '../../../../assets/productImage/productImage2.jpeg',
    '../../../assets/productImage/productImage3.jpeg',
    '../../../../assets/productImage/productImage4.jpeg',
    '../../../assets/productImage/productImage5.jpeg',
  ];

  quantity = new FormControl(0);
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
