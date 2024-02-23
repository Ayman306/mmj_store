import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http:HttpClient) {}
  apiUrl =environment.apiUrl
  getCartItem(id:any){
    return this.http.get<any>(`${this.apiUrl}/cart/${id}`,)
  }
}
