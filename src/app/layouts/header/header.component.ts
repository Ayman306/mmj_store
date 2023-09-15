import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideModule } from 'ngx-splide';
import { Router, RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CartModelComponent } from '../../shared/model/cart-model/cart-model.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
  constructor(private router: Router, private modalService: BsModalService) {}
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
    this.modalRef = this.modalService.show(CartModelComponent, {
      class: 'modal-lg', // You can specify modal options here
    });
  }
  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }

  closeCartModal() {
    this.modalRef.hide();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
