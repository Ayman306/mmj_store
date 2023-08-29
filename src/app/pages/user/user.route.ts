import { Routes } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./user.component').then(c=>c.UserComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(c=>c.ProfileComponent)
  }
]as Routes
