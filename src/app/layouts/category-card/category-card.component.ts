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
      image:
        'https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
    },
    {
      title: 'casual',
      image:
        'https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
    },
    {
      title: 'casual',
      image:
        'https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
    },
    {
      title: 'casual',
      image:
        'https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
    },
    {
      title: 'casual',
      image:
        'https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
    },
  ];
  navigateToCatg(type: string) {
    this.route.navigate(['/product'], {
      queryParams: { type: type },
    });
    console.log('navigated');
  }
}
