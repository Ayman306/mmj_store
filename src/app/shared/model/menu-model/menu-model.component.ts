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
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-model',
  standalone: true,
  imports: [CommonModule, MatIconModule, NgIcon],
  templateUrl: './menu-model.component.html',
  styleUrls: ['./menu-model.component.scss'],
  animations: [
    trigger('slideInFromLeft', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition('void => *', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class MenuModelComponent {
  constructor(
    public dialogRef: MatDialogRef<CartModelComponent>,
    private router: Router
  ) {}

  close() {
    this.dialogRef.close();
  }
  navigate(route: string) {
    switch (route) {
      case 'profile':
        this.router.navigate([`/user/${route}`]);
        break;
      case 'home':
        this.router.navigate(['/home']);
        break;
      default:
        this.router.navigate([`product/${route}`]);
        break;
    }
    this.close();
  }
}
