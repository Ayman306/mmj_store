import { Component, Inject,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {  MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-size-qty',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatIconModule],
  templateUrl: './size-qty.component.html',
  styleUrls: ['./size-qty.component.scss']
})
export class SizeQtyComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<SizeQtyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


_step: any =1;
_value: any=1;

sizes=[]
activeSize=''
  ngOnInit(): void {
    this._value=this.data.quantity
    this.activeSize = this.data.selectedSize
    this.sizes= this.data.allSize.split(",")
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  sizeUpdate() {
    this.dialogRef.close({
      size: this.activeSize,
      quantity: this._value
    });
    }
    incrementValue(arg0: number) {
    this._value += arg0;
    }

  selectSize(size:any){
    this.activeSize=size
    console.log(size);
  }
}
