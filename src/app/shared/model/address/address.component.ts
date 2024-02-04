import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}
  myForm!: FormGroup;
  ngOnInit(): void {
    // Creating the form structure
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    // Patching values from the provided data
    this.myForm.patchValue({
      name: this.data.name || '',
      street: this.data.street || '',
      city: this.data.city || '',
      state: this.data.state || '',
      country: this.data.country || '',
      postalCode: this.data.postalCode || '',
      phone: this.data.phone || '',
      email: this.data.email || '',
    });
  }
  close() {
    this.dialog.closeAll();
  }
}
