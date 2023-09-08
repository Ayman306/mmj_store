import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';

export default [
  {
    path: '',
    component: LoginComponent,
    data: { num: -1 },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { num: 1 },
  },
  {
    path: 'otp',
    component: OtpComponent,
    data: { num: 2 },
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    data: { num: 3 },
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.route'),
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.route'),
  },
] as Routes;
