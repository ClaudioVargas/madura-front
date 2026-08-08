import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'fruits',
    loadChildren: () =>
      import('./features/fruit/fruit.routes').then((m) => m.fruitRoutes),
  },
//   {
//     path: 'vegetables',
//     loadChildren: () =>
//       import('./features/vegetable/vegetable.routes').then((m) => m.vegetableRoutes),
//   },
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
