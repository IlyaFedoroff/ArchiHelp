import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)  // Загрузка standalone компонента
  },
  {
    path: 'user-profile',
    loadComponent: () => import('./user-profile/user-profile.component').then(c => c.UserProfileComponent)  // Загрузка standalone компонента
  },
  {
    path: 'search-results',
    loadComponent: () => import('./search-results/search-results.component').then(c => c.SearchResultsComponent)
  },
  {
    path: 'support',
    loadComponent: () => import('./support/support.component').then(c => c.SupportComponent)
  }
];
