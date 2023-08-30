import { Routes } from "@angular/router"

 export const App_Route :Routes= [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./pages/pages.route')
      },
      {
        path: '**',
        loadComponent:() => import('./shared/shared-component/not-found/not-found.component').then(c=> c.NotFoundComponent)
      }

]