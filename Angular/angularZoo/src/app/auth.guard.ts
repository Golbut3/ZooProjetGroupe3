import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './compte/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (!authService.isAuthenticated()) {
    const router = inject(Router);
    router.navigate([ '/accueil' ]);
  }

  if(!authService.hasRole("admin")) {
  return false;
   }

  return true;
};
