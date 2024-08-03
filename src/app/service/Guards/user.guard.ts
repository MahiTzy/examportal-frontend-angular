import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../apis/loginApi/login.service';

export const UserGuard: CanActivateFn = (route, state) => {
  const loginSercive = inject(LoginService);
  const router = inject(Router);
  if (loginSercive.isLoggedIn() && loginSercive.getUserRole() == 'NORMAL') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
