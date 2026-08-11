import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface LoginResponse {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  // signal que representa el token actual
  private _token = signal<string | null>(this.getTokenFromStorage());
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  // computed para exponer si está autenticado (se puede usar desde componentes)
  readonly isAuthenticated = computed(() => !!this._token());


  // Exponer el valor actual del token (útil para interceptores)
  getToken(): string | null {
    return this._token();
  }

  // Observable para iniciar sesión
  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/auth/login', { username, password })
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
          this._token.set(res.token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this._token.set(null);
  }

  // Exponer la signal para bindings si hace falta
  tokenSignal() {
    return this._token;
  }

  private getTokenFromStorage(): string | null {
    // 3. Verificamos si estamos ejecutando el código en el navegador
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null; // Retorna null si se ejecuta en el servidor (Node.js)
  }
}
