import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUserSession(){
    return JSON.parse(sessionStorage.getItem('user') || '{}');
  }
  setUserSession(user:any){
    return sessionStorage.setItem('user',JSON.parse(JSON.stringify(user)) )
  }
  removeUserSession(){
  sessionStorage.removeItem('user')
  localStorage.removeItem('Token')
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
      key:'street',
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
      key:'country',
      type:'text',
      validators: [Validators.required]
    },
    {
      key:'postalCode',
      type:'text',
      validators: [Validators.required]
    },
    {
      key:'phone',
      type:'text',
      validators: [Validators.required]
    }
  ]
  userdata =[
    {
      key:'name',
      type:'text',
      validators: [Validators.required],
      value:this.getUserSession().name,
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
}
