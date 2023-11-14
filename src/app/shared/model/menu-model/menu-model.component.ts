import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { CartModelComponent } from '../cart-model/cart-model.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-menu-model',
  standalone: true,
  imports: [CommonModule, MatIconModule, NgIcon],
  templateUrl: './menu-model.component.html',
  styleUrls: ['./menu-model.component.scss'],
  animations: [
    trigger('slideInFromLeft', [
      state('void', style({ transform: 'translateY(100%)' })),
      transition('void => *', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class MenuModelComponent {
  constructor(public dialogRef: MatDialogRef<CartModelComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
