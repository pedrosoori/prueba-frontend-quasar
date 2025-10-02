import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../storage/session.service';


@Injectable({ providedIn: 'root' })
export class AuthService {
    private _user = signal<string | null>(null);


    constructor(private session: SessionService, private router: Router) {
        this._user.set(this.session.get());
    }


    login(username: string, password: string): boolean {
        // credenciales simuladas
        if (username === 'admin' && password === 'admin') {
            this.session.set('token-admin');
            this._user.set('admin');
            return true;
        }
        return false;
    }


    logout() {
        this.session.clear();
        this._user.set(null);
        this.router.navigateByUrl('/login');
    }


    isAuthenticated(): boolean { return this._user() !== null; }
}