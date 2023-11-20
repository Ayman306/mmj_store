import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../model/star-rating/star-rating.component';
import { NgxSplideModule } from 'ngx-splide';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, NgxSplideModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  @Input() review = [
    {
      stars: 5,
      content:
        "I can't express how happy I am with my recent purchase.The quality of the fabric and the fit of the clothes are top-notch.Thankyou!",
      name: 'John Williams',
    },
    {
      stars: 3,
      content:
        "I can't express how happy I am with my recent purchase.The quality of the fabric and the fit of the clothes are top-notch.Thankyou!",
      name: 'Kang Williams',
    },
  ];
}
