import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}
  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = this.fb.group({});

this.data.forEach((field: any) => {
  this.myForm.addControl(field.key, this.fb.control('', field.validators));
});
this.data.forEach((field:any) => {
  if (this.myForm.controls[field.key]) {
    this.myForm.controls[field.key].setValue(field.value || '');
  }
});
  }

  onSubmit(){
    console.log(this.myForm.value);

  }
  close() {
    this.dialog.closeAll();
  }
}
