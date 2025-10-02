import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';


export const AuthGuard: CanActivateFn = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (!auth.isAuthenticated()) {
        router.navigateByUrl('/login');
        return false;
    }
    return true;
};