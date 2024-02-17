import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./profile/profile.component').then((c) => c.ProfileComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((c) => c.ProfileComponent),
  },
  {
    path: 'wishlist',
    loadComponent:()=> import('./wishlist/wishlist.component').then((c)=>c.WishlistComponent),
  }
] as Routes;
