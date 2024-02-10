import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getToken() {
    return localStorage.getItem('Token');
  }

  setToken(token:any) {

    localStorage.setItem('Token', JSON.stringify(token));
  }
  removeToken() {
    localStorage.removeItem('Token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

}
