import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgIcon } from '@ng-icons/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from 'src/app/shared/model/address/address.component';
import { UserService } from '../service/user.service';

interface userData{
  customer_id:string
  email:string,
  first_name:string,
  last_name:string,
  mobile_number:string
}
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
  user!:userData
  address:any=[]
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


  smapleaddress ={
    "customer_id": "4a7e25f0-cd90-11ee-a2a0-75db8c97f2ea",
     "add_type": "delivery",
     "add_one": "majoor",
     "add_two": "mallar",
     "state": "karnataka",
     "city": "kaup",
     "pincode": 574106
}

allOrder:any=[]
userData:any

ngOnInit(): void {
  this.user = this.userService.getUserSession();
}
orderinfo(index: any) {
  console.log('order index', index);
}
  updateDetails(dataOf:string){
    let updatedData:any
    const dialogRef =  this.dialog.open(AddressComponent, {
        data: dataOf == 'address' ? this.userService.userProfile : this.userService.userdata,
        hasBackdrop:true
      })
      const sub = dialogRef.componentInstance.onAdd.subscribe((res) => {
        updatedData = res
        console.log(res ,'sssuubbbb parent')
      });
      dialogRef.afterClosed().subscribe(() => {

        if(updatedData){
          updatedData.customer_id = this.user.customer_id
          dataOf == 'address' ? this.userService.addNewUserAddress(updatedData).subscribe( () => this.getUserAddress() ) :
          this.userService.updateUserInfo(updatedData).subscribe( res => {
            this.userService.setUserSession(JSON.stringify(res.data))
            this.getUserInfo()
            console.log(res,'pppp');

          } )
        }
        sub.unsubscribe()
      })
  }
  getAllUserOrder(){
    this.userService.getAllUsersOrder(this.user.customer_id).subscribe( res => this.allOrder = res.data )
  }
  getUserInfo(){
    this.userService.getUserInfo().subscribe( res =>{
      this.user=res.data
    })
  }
  getUserAddress(){
    this.userService.getAllUserAddress().subscribe( res => this.address=res )
  }

}
