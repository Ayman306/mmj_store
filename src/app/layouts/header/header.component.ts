import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideModule } from 'ngx-splide';
import { Router, RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CartModelComponent } from '../../shared/model/cart-model/cart-model.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
import { SearchModelComponent } from 'src/app/shared/model/search-model/search-model.component';
import { NgIcon } from '@ng-icons/core';
import { FormControl } from '@angular/forms';
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
    NgIcon
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @ViewChild(lgModal) CartModelComponent!: ElementRef;
  constructor(
    private router: Router,
    private modalService: BsModalService,
    private dialog: MatDialog
  ) {}
  navbarOpen = false;
  modalRef!: BsModalRef;
  searchClicked = false
  search= new FormControl()

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
  navigate(route: string) {
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
}
