/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(private http:HttpClient) { }
  apiUrl =environment.apiUrl
  getProducts(params?: HttpParams):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/product`,{params});
  }
  getProductById(id:any){
    return this.http.get<any>(`${this.apiUrl}/product/${id}`);
  }
  getCategory(){
    return this.http.get<any>(`${this.apiUrl}/categories`);
  }

  getAllWishList(userId:any){
    const auth:any = localStorage.getItem('Token')

    const headers = { 'Authorization': auth ? JSON.parse(auth).access_token : '' };
    return this.http.post<any>(`${this.apiUrl}/wish-list`,{ headers },userId);
  }
  addWishList(data:any){
    return this.http.post<any>(`${this.apiUrl}/wish-list`,data);
  }
  deleteWishList(id:any){
    return this.http.delete<any>(`${this.apiUrl}/wish-list/${id}`);
  }
}
