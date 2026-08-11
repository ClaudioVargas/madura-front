import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (): boolean | UrlTree => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // usando la computed isAuthenticated (signal)
  if (auth.isAuthenticated()) {
    return true;
  }

  // redirigir a /login si no autenticado
  return router.createUrlTree(['/login']);
};
