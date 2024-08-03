import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../apis/loginApi/login.service';

export const AdminGuard: CanActivateFn = (route, state) => {
  const loginSercive = inject(LoginService);
  const router = inject(Router);
  if (loginSercive.isLoggedIn() && loginSercive.getUserRole() == 'ADMIN') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
