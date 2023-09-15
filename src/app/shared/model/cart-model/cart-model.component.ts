import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-model.component.html',
  styleUrls: ['./cart-model.component.scss'],
  animations: [
    trigger('slideInFromRight', [
      state('void', style({ transform: 'translateX(100%)' })),
      transition('void => *', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class CartModelComponent {
  modalRef!: BsModalRef;
  constructor(public dialogRef: MatDialogRef<CartModelComponent>) {}

  close() {
    this.dialogRef.close();
  }
  // constructor() {
  //   console.log('heyyyy');
  // }

  // close() {
  //   this.modalRef.hide();
  // }
}
