import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideModule } from 'ngx-splide';
import { Router, RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CartModelComponent } from '../../shared/model/cart-model/cart-model.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
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
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @ViewChild(lgModal) CartModelComponent!: ElementRef;
  constructor(private router: Router, private modalService: BsModalService,private dialog: MatDialog) {}
  navbarOpen = false;
  modalRef!: BsModalRef;

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
  navigate(route: string) {
    if (route === 'profile') {
      this.router.navigate([`${route}`]);
    } else if (route === 'cart') {
      this.openCartModal();
    } else {
      this.router.navigate([`product/${route}`]);
    }
  }
  openCartModal() {
    // this.modalRef = this.modalService.show(CartModelComponent, {
    //   class: 'modal-lg right-slide-modal', // You can specify modal options here
    // });
    this.dialog.open(CartModelComponent, {
      panelClass: 'right-hidden-dialog', // Apply custom CSS class
      position: {
        right: '0', // Start from the right
        top: '0',
      },
    });
  }
  openModal(template: any) {
    const initialState = {
      // Your modal data or configuration here
    };

    const config = {
      class: 'custom-modal-class', // Add your custom class here
      initialState,
    };

    this.modalRef = this.modalService.show(template, config);
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
