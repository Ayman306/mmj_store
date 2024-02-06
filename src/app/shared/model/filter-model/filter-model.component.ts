import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-filter-model',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './filter-model.component.html',
  styleUrls: ['./filter-model.component.scss'],
  animations: [
    trigger('slideInFromBottom', [
      state(
        'void',
        style({
          transform: 'translate(0%,100%)',
          width: '100vw',
        })
      ),
      transition('void => *', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class FilterModelComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<FilterModelComponent>
  ) {}
  sortBy = [
    'Popularity',
    'Newest',
    'Rating',
    'Price Low to High',
    'Price High to Low',
  ];

  sortByOption(sort: string) {
    console.log(sort);
    this.dialog.close();
  }
}
