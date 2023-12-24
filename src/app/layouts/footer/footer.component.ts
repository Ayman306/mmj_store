import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgIcon],
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
  footer = [
    {
      head: 'Quick Actions',
      category: [
        {
          title: 'Track your order',
          navigate: 'TrackOrder',
        },
        {
          title: 'Return/Refunds',
          navigate: 'returns',
        },
        {
          title: 'Careers',
          navigate: 'career',
        },
      ],
    },
    {
      head: 'Quick links',
      category: [
        {
          title: 'About us',
          navigate: 'about',
        },
        {
          title: 'Return/Refunds Policy',
          navigate: 'return-policy',
        },
        {
          title: 'Request a Return',
          navigate: 'request-return',
        },
      ],
    },
  ];
  footerNavigate(link: any) {
    console.log(link, 'footer link');
  }
}
