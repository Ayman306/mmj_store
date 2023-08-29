import { Routes } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./all-product/all-product.component').then(c=>c.AllProductComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./product-page/product-page.component').then(c=>c.ProductPageComponent)
  }
]as Routes
