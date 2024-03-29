import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './login/otp/otp.component';

export default [
  {
    path: '',
    loadComponent: () =>
    import('./home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'otp',
    component: OtpComponent
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.route')
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.route')
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./payment/checkout/checkout.component').then(
        (c) => c.CheckoutComponent
      ),
  },
] as Routes;
