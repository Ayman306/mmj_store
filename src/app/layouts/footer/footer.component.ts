import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  featurContent = [
    {
      img: '../../../assets/footer/cartFooter.png',
      head: 'Free Delivery',
      text: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
    },
    {
      img: '../../../assets/footer/paymentIcon.png',
      head: 'Free Delivery',
      text: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
    },
    {
      img: '../../../assets/footer/qualityIcon.png',
      head: 'Free Delivery',
      text: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
    },
    {
      img: '../../../assets/footer/offerIcon.png',
      head: 'Free Delivery',
      text: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
    },
  ];
  // extract current year
  year = new Date().getFullYear();
}
