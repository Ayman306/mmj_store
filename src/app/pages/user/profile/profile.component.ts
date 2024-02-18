import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgIcon } from '@ng-icons/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from 'src/app/shared/model/address/address.component';
import { Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, AccordionModule, TabsModule, NgIcon],
  // imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],

  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private dialog: MatDialog,private userService:UserService) {}
  ngOnInit(): void {
    this.user = this.userService.getUserSession();
  }
  orderinfo(index: any) {
    console.log('order index', index);
  }
  user:any
  itemStringsLeft = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  info = [
    {
      product_title: 'name',
      value: 'Ayman',
    },
    {
      product_title: 'phone',
      value: '9741025256',
    },
    {
      product_title: 'email',
      value: 'ayman@gmail',
    },
  ];
  address = [
    {
      product_title: 'address',
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
      product_title: 'Jacket',
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
  userDataUpdate(){
    this.dialog.open(AddressComponent, {
      data:this.userService.userdata
    })
  }
  addressFunction() {
      this.dialog.open(AddressComponent, {
        // data: {
        //   name: 'Ayman',
        //   street: '2nd Cross opppsite to homestore',
        //   city: 'Cairo',
        //   state: 'Egypt',
        //   country: 'Egypt',
        //   postalCode: '12345',
        //   phone: '9741025256',
        //   email: 'ayman@gmail.com',
        //   update: update,
        // },
        data:this.userService.userProfile
      });
  }
}
