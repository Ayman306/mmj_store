import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cart-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-model.component.html',
  styleUrls: ['./cart-model.component.scss'],
})
export class CartModelComponent {
  modalRef!: BsModalRef;
  constructor() {
    console.log('heyyyy');
  }

  close() {
    this.modalRef.hide();
  }
}
