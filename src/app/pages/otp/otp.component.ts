/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgOtpInputComponent,
  NgOtpInputConfig,
  NgOtpInputModule,
} from 'ng-otp-input';
import {
  CountdownComponent,
  CountdownConfig,
  CountdownEvent,
  CountdownModule,
} from 'ngx-countdown';

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
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.mobile = sessionStorage.getItem('mobile');
    console.log(this.mobile);
  }
  mobile!: any;
  @ViewChild(NgOtpInputComponent, { static: false })
  otp!: string;
  showOtpComponent = true;
  focusToFirstElementAfterValueUpdate = false;
  @ViewChild(NgOtpInputComponent, { static: false })
  ngOtpInput!: NgOtpInputComponent;
  config: NgOtpInputConfig = {
    allowNumbersOnly: false,
    length: 4,
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
  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;

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
    // console.log('Notify', e);
  }
  otpValid = false;
  verify() {
    if (this.otp.length === 4) {
      this.route.navigateByUrl('/home');
    } else {
      this.otp = '';
      this.otpValid = true;
    }
  }
  backTOlogin() {
    this.route.navigateByUrl('/login');
  }
  // setVal(val: any) {
  //   this.ngOtpInput.setValue(val);
  //   if (this.focusToFirstElementAfterValueUpdate) {
  //     const eleId = this.ngOtpInput.getBoxId(0);
  //     this.ngOtpInput.focusTo(eleId);
  //   }
  // }

  // toggleDisable() {
  //   if (this.ngOtpInput.otpForm) {
  //     if (this.ngOtpInput.otpForm.disabled) {
  //       this.ngOtpInput.otpForm.enable();
  //     } else {
  //       this.ngOtpInput.otpForm.disable();
  //     }
  //   }
  // }

  // onConfigChange() {
  //   this.showOtpComponent = false;
  //   this.otp = '';
  //   setTimeout(() => {
  //     this.showOtpComponent = true;
  //   }, 0);
  // }
}
