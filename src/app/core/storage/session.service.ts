import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly KEY = 'pt-angular-session';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private get storage(): Storage | null {
    if (!this.isBrowser) return null;
    try {
      return window.localStorage;
    } catch {
      return null;
    }
  }

  set(token: string) {
    this.storage?.setItem(this.KEY, token);
  }

  get(): string | null {
    return this.storage?.getItem(this.KEY) ?? null;
  }

  clear() {
    this.storage?.removeItem(this.KEY);
  }
}
