import { Routes } from "@angular/router";

export default   [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.route')
  },
  {
    path: 'product',
    loadChildren:()=> import('./product/product.route')
  }
] as Routes
