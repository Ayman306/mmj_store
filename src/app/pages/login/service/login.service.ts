import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http:HttpClient) {

}
  login(data:any) {
    return this.http.post<any>(`${environment.apiUrl}/user/login`,data);
  }
  otpVerification(otp:any){
    return this.http.post<any>(`${environment.apiUrl}/user/verify-otp`,otp);
  }

}
