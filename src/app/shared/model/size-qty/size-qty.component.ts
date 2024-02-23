import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-size-qty',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatIconModule],
  templateUrl: './size-qty.component.html',
  styleUrls: ['./size-qty.component.scss']
})
export class SizeQtyComponent {

_step: any =1;
_value: any=1;

product: any;
  constructor(
    public dialogRef: MatDialogRef<SizeQtyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  sizeUpdate() {
    this.dialogRef.close({
      size: this.activeSize,
      quantity: this._value
    });
    this.onNoClick()
    }
    incrementValue(arg0: number) {
    this._value += arg0;
    }
  sizes=[
    {
      id:1,
      size:'S'
    },
    {
      id:2,
      size:'M'
    },
    {
      id:3,
      size:'L'
    },
    {
      id:4,
      size:'XL'
    }
  ]
  activeSize=''

  selectSize(size:any){
    this.activeSize=size
    console.log(size);
  }
}
