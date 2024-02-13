/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http:HttpClient) {}
apiUrl =environment.apiUrl
  login(data:any) {
    return this.http.post<any>(`${this.apiUrl}/user/login`,data);
  }
  otpVerification(otp:any){
    return this.http.post<any>(`${this.apiUrl}/user/verify-otp`,otp);
  }
  resendOtp(data:any){
    return this.http.post<any>(`${this.apiUrl}/user/resend-otp`,data);
  }
}
