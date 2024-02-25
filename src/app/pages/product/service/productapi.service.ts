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
  auth:any = localStorage.getItem('Token')
  headers = { 'Authorization': this.auth ? JSON.parse(this.auth).access_token : '' };

  getProducts(params?: HttpParams):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/product`,{ headers:this.headers, params});
  }
  getProductById(id:any){
    return this.http.get<any>(`${this.apiUrl}/product/${id}`,{ headers:this.headers});
  }
  getCategory(){
    return this.http.get<any>(`${this.apiUrl}/categories`);
  }

  getAllWishList(userId:any){

    return this.http.get<any>(`${this.apiUrl}/wish-list/${userId}`,{ headers:this.headers });
  }
  addWishList(data:any){
    return this.http.post<any>(`${this.apiUrl}/wish-list/`,data,{ headers:this.headers });
  }
  deleteWishList(userId:any,productId:any){
    return this.http.delete<any>(`${this.apiUrl}/wish-list/${userId}/${productId}`,{ headers:this.headers });
  }

  getAllCartList(){
    const userId = {
      customer_id: JSON.parse(sessionStorage.getItem('user') || '{}').customer_id
    }
    return this.http.post<any>(`${this.apiUrl}/cart`,userId);
  }

  addCart(data:any){
    return this.http.post<any>(`${this.apiUrl}/cart`,data);
  }

  deleteSingleCart(userId:any,productId:any){
    return this.http.delete<any>(`${this.apiUrl}/cart/${userId}/${productId}`,{ headers:this.headers });
  }
}
