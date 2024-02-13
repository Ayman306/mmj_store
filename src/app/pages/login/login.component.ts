import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from './service/login.service';
import { ToastrService } from 'ngx-toastr';
import { OtpComponent } from './otp/otp.component';
import { LazyLoadImagesDirective } from 'src/app/utils/directive/lazy-load-images.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,OtpComponent,LazyLoadImagesDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private loginService:LoginService, private toaster: ToastrService) {}

  switchView = {
    login: 'LOGIN_VIEW',
    otp: 'OTP_VIEW',
  }
  currentView = this.switchView.login
  loginForm = this.fb.group({
    mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  });
  validData = false;
  login() {
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
          this.currentView = this.switchView.otp
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
  backToLogin(str:boolean){
    if(str){
      this.loginForm.reset();
      this.currentView = this.switchView.login
    }
  }
}
