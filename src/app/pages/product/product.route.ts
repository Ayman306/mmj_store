import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./all-product/all-product.component').then(
        (c) => c.AllProductComponent
      ),
    data: { num: 1 },
  },
  {
    path: 'tshirt',
    loadComponent: () =>
      import('./product-page/product-page.component').then(
        (c) => c.ProductPageComponent
      ),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./wishlist/wishlist.component').then((c) => c.WishlistComponent),
  },
] as Routes;
