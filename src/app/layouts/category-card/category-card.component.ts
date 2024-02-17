import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LazyLoadImagesDirective } from 'src/app/utils/directive/lazy-load-images.directive';
import { ProductapiService } from '../../pages/product/service/productapi.service';
import { ProductService } from 'src/app/pages/product/service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-card',
  standalone: true,

  imports: [CommonModule,LazyLoadImagesDirective],
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  constructor(private route: Router,private productService:ProductService,private productapi:ProductapiService) {}
  categories$!: Observable<any>;
  ngOnInit() {
    this.categories$ = this.productService.getData('categories', () => this.productapi.getCategory());
  }

  navigateToCatg(type: string) {
    this.route.navigate(['/product'], {
      queryParams: { category: type },
    });
    console.log('navigated',type);
  }
}
