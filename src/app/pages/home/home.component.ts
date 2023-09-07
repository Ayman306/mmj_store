import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideModule } from 'ngx-splide';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxSplideModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
