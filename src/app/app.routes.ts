import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'fruits',
    loadChildren: () =>
      import('./features/fruit/fruit.routes').then((m) => m.fruitRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.routes').then((m) => m.loginRoutes),
  },
  {
    path: '',
    redirectTo: 'fruits/capture',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'fruits/capture',
  },
];
