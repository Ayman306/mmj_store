import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, AccordionModule, TabsModule, NgIcon],
  // imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],

  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  orderinfo(index: any) {
    console.log('order index', index);
  }
  itemStringsLeft = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  info = [
    {
      title: 'name',
      value: 'Ayman',
    },
    {
      title: 'phone',
      value: '9741025256',
    },
  ];
  address = [
    {
      title: 'address',
      name: 'Ayman',
      address: '2nd Cross',
      state: 'Cairo, Egypt',
      city: 'Cairo',
      country: 'Egypt',
      postalCode: '12345',
      phone: '97410-25256',
    },
  ];
  order = [
    {
      title: 'Jacket',
      subText: 'Stylish tshirts , perfect for any casual or chic ensemble.',
      price: 122.0,
      image: '../../../assets/home/wardrobe.jpg',
      name: 'Ayman',
      address: '2nd Cross',
      state: 'Cairo, Egypt',
      city: 'Cairo',
      country: 'Egypt',
      postalCode: '12345',
      phone: '97410-25256',
    },
  ];
}
