import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideModule } from 'ngx-splide';
import { Router, RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CartModelComponent } from '../../shared/model/cart-model/cart-model.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
import { SearchModelComponent } from 'src/app/shared/model/search-model/search-model.component';
import { NgIcon } from '@ng-icons/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MenuModelComponent } from 'src/app/shared/model/menu-model/menu-model.component';
import { LazyLoadImagesDirective } from 'src/app/utils/directive/lazy-load-images.directive';
import { UserService } from 'src/app/pages/user/service/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgxSplideModule,
    RouterModule,
    MatBadgeModule,
    MatIconModule,
    CartModelComponent,
    NgIcon,
    ReactiveFormsModule,
    LazyLoadImagesDirective
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @ViewChild(lgModal) CartModelComponent!: ElementRef;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService:UserService,
    private toaster:ToastrService
  ) {}
  navbarOpen = false;
  menuClicked = false;
  modalRef!: BsModalRef;
  searchClicked = false;
  user:any
  search = new FormControl();

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
     this.user=this.userService.getUserSession() || null;
  }
  navigate(route: string) {
    if (route === 'profile' || route === 'cart' || route === 'wishlist') {
      if (!this.user?.customer_id) {
        this.toaster.success("Please login first");
        this.router.navigate(['/login']);
        return;
      }
    }

    switch (route) {
      case 'profile':
        this.router.navigate([`/user/${route}`]);
        break;
      case 'cart':
        this.openCartModal();
        break;
      case 'search':
        this.openSearchModal();
        break;
      case 'wishlist':
        this.router.navigate([`/product/wishlist`]);
        break;
      case 'login':
        this.router.navigate(['/login']);
        break;
      default:
        this.router.navigate([`product/${route}`]);
        break;
    }
  }
  openCartModal() {
    this.dialog.open(CartModelComponent, {
      panelClass: 'right-hidden-dialog', // Apply custom CSS class
      position: {
        right: '0', // Start from the right
        top: '0',
      },
    });
  }
  openMenuModal() {
    this.dialog.open(MenuModelComponent, {
      panelClass: 'left-hidden-dialog', // Apply custom CSS class
      position: {
        left: '0', // Start from the left
        top: '0',
      },
    });
  }
  openSearchModal() {
    this.dialog.open(SearchModelComponent, {
      panelClass: 'searchbar',
      position: {
        right: '0', // Start from the right
        top: '0',
      },
    });
  }

  // openModal(template: any) {
  //   this.modalRef = this.modalService.show(template);
  // }

  closeCartModal() {
    this.modalRef.hide();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  searchProduct() {
    console.log(this.search.value);
  }
  closeSearch() {
    this.search.reset();
    this.searchClicked = false;
  }
  logout(){
    console.log("logoout");

    this.userService.removeUserSession()
    this.toaster.success("You've been logged out")
  }
}
