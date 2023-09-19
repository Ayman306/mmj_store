import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-model',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss'],
})
export class SearchModelComponent {
  constructor(public dialogRef: MatDialogRef<SearchModelComponent>) {}
  close() {
    this.dialogRef.close();
  }
  popular = ['Anime tshirt', 'Mangalore tshirt', 'Casual wear', 'Highlight'];
}
