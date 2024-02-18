import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/layouts/product-card/product-card.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductapiService } from '../service/productapi.service';
import { UserService } from '../../user/service/user.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit{
  constructor(private route:Router,private productApi:ProductapiService,private userService:UserService){}
  product$!:Observable<any>
  empty=false
ngOnInit(): void {
    this.getProduct()
}
getProduct(){
  let user:any=this.userService.getUserSession()
  if(user){
    user={
      customer_id : user.customer_id
    }
    this.product$ = this.productApi.getAllWishList(user)
  }else{
    this.empty=true
  }


}

  removeWishList($event: any) {
    console.log($event,'removewishlist')
    }
}
