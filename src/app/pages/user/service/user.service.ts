import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor(private http:HttpClient){}
apiUrl =environment.apiUrl
  getUserSession(){
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  setUserSession(user:any){
    return localStorage.setItem('user',JSON.parse(JSON.stringify(user)) )
  }
  removeUserSession(){
  localStorage.removeItem('user')
  localStorage.removeItem('Token')
  console.log('logout');

  window.location.reload()
  }
  userProfile =[
    {
      key:'name',
      type:'text',
      validators: [Validators.required],
      value:this.getUserSession().first_name,
      update:true
    },
    {
      key:'add_one',
      type:'text',
      validators: [Validators.required]
    },
    {
      key:'city',
      type:'text',
      validators: [Validators.required]
    },
    {
      key:'state',
      type:'text',
      validators: [Validators.required]
    },
    {
      key:'pincode',
      type:'number',
      validators: [Validators.required]
    },
    {
      key:'phone',
      type:'number',
      validators: [Validators.required]
    }
  ]
  userdata =[
    {
      key:'first_name',
      type:'text',
      validators: [Validators.required],
      value:this.getUserSession().first_name,
      update:true
    },
    {
      key:'email',
      type:'text',
      validators: [Validators.required],
      value:this.getUserSession().email,
      update:true
    }

  ]

  getAllUsersOrder(userId:any){
    return this.http.get<any>(`${this.apiUrl}/order/`+userId,);
  }

  getUserInfo(){
    return this.http.get<any>(`${this.apiUrl}/user/`+this.getUserSession().customer_id);
  }

  getAllUserAddress(){
    return this.http.get<any>(`${this.apiUrl}/address/`+this.getUserSession().customer_id);
  }
  addNewUserAddress(data:any){
    return this.http.post<any>(`${this.apiUrl}/address/`,data);
  }
  updateUserInfo(data:any){
    return this.http.put<any>(`${this.apiUrl}/user/`+this.getUserSession().customer_id,data)
  }

}
