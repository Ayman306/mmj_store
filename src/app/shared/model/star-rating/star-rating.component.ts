import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() stars = 5;
  @Input() margin = 2.5;
  @Input() rating = 0;
  @Input() justifyContentCenter = false;
  @Input() readonly = true;
}
