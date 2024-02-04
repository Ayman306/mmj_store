import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private route: Router) {}
  loginForm = this.fb.group({
    mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  });
  validData = false;
  login() {
    console.log(this.loginForm);
    const mobile = this.loginForm.value.mobile || '';
    if (mobile.length === 10) {
      this.validData = !this.validData;
    }
    this.validData = false;
    sessionStorage.setItem('mobile', mobile || '');
    this.route.navigate(['/otp']);
  }
  get m() {
    return this.loginForm.controls;
  }
}
