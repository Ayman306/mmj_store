import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private http:HttpClient){}
  apiUrl =environment.apiUrl

  getToken() {
    return localStorage.getItem('Token');
}

  setToken(token:any) {


      localStorage.setItem('Token', JSON.stringify(token));
  }
  removeToken() {
    localStorage.removeItem('Token');
  }

  refreshToken(data:any){
    return this.http.post<any>(`${this.apiUrl}/user/refresh`,data);
  }

}
