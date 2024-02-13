/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(private http:HttpClient) { }
  apiUrl =environment.apiUrl
  getProducts(){
    return this.http.get<any>(`${this.apiUrl}/product`);
  }
  getProductById(id:any){
    return this.http.get<any>(`${this.apiUrl}/product/${id}`);
  }
  getCategory(){
    return this.http.get<any>(`${this.apiUrl}/categories`);
  }
  getAllProductByCategory(params: HttpParams){
    return this.http.get<any>(`${this.apiUrl}/product/category`,{params});
  }

  getAllWishList(){
    return this.http.get<any>(`${this.apiUrl}/wish-list`);
  }
  addWishList(data:any){
    return this.http.post<any>(`${this.apiUrl}/wish-list`,data);
  }
  deleteWishList(id:any){
    return this.http.delete<any>(`${this.apiUrl}/wish-list/${id}`);
  }
}
