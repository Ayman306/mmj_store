import { Routes } from '@angular/router';
export const App_Route: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.route'),
    data: { num: 1 },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/shared-component/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
    data: { num: 7 },
  },
];
