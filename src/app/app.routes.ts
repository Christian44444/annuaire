import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'personne',
    loadComponent: () => import('./personne/personne.page').then( m => m.PersonnePage)
  },
  {
    path: 'personne-detail',
    loadComponent: () => import('./personne-detail/personne-detail.page').then( m => m.PersonneDetailPage)
  },
];
