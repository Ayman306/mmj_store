import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './login/otp/otp.component';

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
    data: { num: 4 },
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.route'),
    data: { num: 5 },
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./payment/checkout/checkout.component').then(
        (c) => c.CheckoutComponent
      ),
  },
] as Routes;
