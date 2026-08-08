import { Routes } from '@angular/router';

export const fruitRoutes: Routes = [
  {
    path: 'capture',
    loadComponent: () =>
      import('./components/fruit-capture/fruit-capture').then((m) => m.FruitCapture),
  },
  {
    path: 'evaluation',
    loadComponent: () =>
      import('./components/fruit-evaluation/fruit-evaluation').then(
        (m) => m.FruitEvaluation
      ),
  },
];
