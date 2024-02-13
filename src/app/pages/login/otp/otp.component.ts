/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NgOtpInputComponent,
  NgOtpInputConfig,
  NgOtpInputModule,
} from 'ng-otp-input';
import {
  CountdownConfig,
  CountdownEvent,
  CountdownModule,
} from 'ngx-countdown';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/interceptor/service/auth.service';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    CountdownModule,
  ],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent {
  constructor(
    private route: Router,
    private loginService: LoginService,
    private toaster: ToastrService,
    private authService:AuthService
  ) {
    this.mobile = sessionStorage.getItem('mobile');
    console.log(this.mobile);
  }
  @Output() backToLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
  mobile!: any;
  @ViewChild(NgOtpInputComponent, { static: false })
  otp!: string;
  showOtpComponent = true;
  focusToFirstElementAfterValueUpdate = false;
  @ViewChild(NgOtpInputComponent, { static: false })
  ngOtpInput!: NgOtpInputComponent;
  config: NgOtpInputConfig = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '1',
    inputClass: 'otpFied',
  };
  configOtp: CountdownConfig = {
    leftTime: 30,
    format: 'mm:ss',
    notify: 0,
    demand: false,
  };

  onOtpChange(otp: string) {
    this.otp = otp;
    console.log(otp);
  }

  notify = '';
  resendDisable = true;
  handleResendEvent(e: CountdownEvent) {
    this.notify = e.action.toUpperCase();
    if (e.action === 'notify') {
      this.notify += ` - ${e.left} ms`;
    }
    if (e.action === 'done') {
      this.resendDisable = false;
    } else {
      this.resendDisable = true;
    }
  }
  otpValid = false;
  verify() {
  if (this.otp.length !== 6) {
    this.otpValid = false;
    this.resetOtp(false,'Enter valid OTP')
    return;
  }
  const otpVerify = {
    "mobile_number": this.mobile,
    "otp": this.otp
  };
  this.loginService.otpVerification(otpVerify).subscribe({
    next: (data) => {
      if (data.status === 'OK') {
        this.authService.setToken({
          "access_token": data.access_token,
          "refresh_token": data.refresh_token
        });
        this.route.navigateByUrl('/home');
      } else {
        this.resetOtp(true, data.message);
      }
    },
    error: (err) => this.resetOtp(false, err.error.message)
  });
}

private resetOtp(isValid: boolean, message: string) {
  // this.otp = '';
  this.otpValid = isValid;
  const toastMethod = isValid ? 'warning' : 'error';
  this.toaster[toastMethod](message);
}
resentOtp(){
  const otpResend = {
    "mobile_number": this.mobile
  };
  this.loginService.resendOtp(otpResend).subscribe({
    next: (data) => {
      if (data.status === 'OK') {
        this.toaster.success(data.message);
      } else {
        this.toaster.error(data.message);
      }
    },
    error: (err) => this.toaster.error(err.error.message)
  });

}
  backTOlogin() {
    this.backToLogin.emit(true); // Emitting the OTP value to the parent
  }
}
