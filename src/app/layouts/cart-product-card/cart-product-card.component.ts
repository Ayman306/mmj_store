/* eslint-disable @angular-eslint/no-input-rename */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.scss'],
})
export class CartProductCardComponent {
  @Input() product!: any;

  _value = 0;
  _step = 1;
  incrementValue(step = 1): void {
    this._value = this._value + step;
  }
  remove(id: number) {
    console.log(id);
  }
}
