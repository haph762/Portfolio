import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Allow access to the route
  } else {
    // Redirect to the login page
    router.navigate(['/demo-angular/login']);
    return false;
  }
};
