import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-search-model',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss'],
  animations: [
    trigger('slideInFromRight', [
      state('void', style({ transform: 'translate(0,-100%)', width: '100vw' })),
      transition('void => *', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class SearchModelComponent {
  constructor(public dialogRef: MatDialogRef<SearchModelComponent>) {}
  close() {
    this.dialogRef.close();
  }
  popular = ['Anime tshirt', 'Mangalore tshirt', 'Casual wear', 'Highlight'];
}
