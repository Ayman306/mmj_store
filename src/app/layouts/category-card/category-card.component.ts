import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  constructor(private route: Router) {}
  categories = [
    {
      title: 'casual',
      image: '../../../assets/category/casual-category.jpg',
    },
    {
      title: 'Wanderlust',
      image: '../../../assets/category/adventureImg.jpg',
    },
    {
      title: 'college',
      image: '../../../assets/category/college-outfit.jpg',
    },
    {
      title: 'Party burst',
      image: '../../../assets/category/party-category.jpg',
    },
    {
      title: 'Gym x anime',
      image: '../../../assets/category/anime-category.jpg',
    },
  ];
  navigateToCatg(type: string) {
    this.route.navigate(['/product'], {
      queryParams: { type: type },
    });
    console.log('navigated');
  }
}
