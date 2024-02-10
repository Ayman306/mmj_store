import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private route: Router,private loginService:LoginService, private toaster: ToastrService) {}
  loginForm = this.fb.group({
    mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  });
  validData = false;
  login() {
    console.log(this.loginForm);
    const mobile = this.loginForm.value.mobile + '' || '';
    if (mobile.length !== 10) {
      this.validData = !this.validData;
      return;
    }else{
      const mobileNumber = {
        mobile_number:this.loginForm.value.mobile+''
      }
      this.loginService.login(mobileNumber).subscribe({
        next: (data)=>{
        if(data.status === 'OK'){
          sessionStorage.setItem('mobile', mobile || '');
          this.toaster.success("OTP sent successfully")
          this.route.navigate(['/otp']);
        } else {
          this.validData = !this.validData;
          this.toaster.error('Invalid number');
        }
      },
      error: (err)=>{
        this.toaster.error(err.error.message);
      }
      })
    }
  }

  get m() {
    return this.loginForm.controls;
  }
}
