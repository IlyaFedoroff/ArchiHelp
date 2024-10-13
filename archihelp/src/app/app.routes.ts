import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)  // Загрузка standalone компонента
  },
  {
    path: 'user-profile',
    loadComponent: () => import('./user-profile/user-profile.component').then(c => c.UserProfileComponent),  // Загрузка standalone компонента
    canActivate: [AuthGuard]
  },
  {
    path: 'search-results',
    loadComponent: () => import('./search-results/search-results.component').then(c => c.SearchResultsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'support',
    loadComponent: () => import('./support/support.component').then(c => c.SupportComponent)
  }
];
