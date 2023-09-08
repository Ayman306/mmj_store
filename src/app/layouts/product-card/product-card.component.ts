import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: any;
  isHovered = false;

  // Method to add the 'active' class
  addActiveClass() {
    this.isHovered = true;
  }

  // Method to remove the 'active' class
  removeActiveClass() {
    this.isHovered = false;
  }
}
