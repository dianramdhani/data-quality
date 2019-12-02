import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationRestService {
  private url: string;
  private storagePrefix: string;
  private user: AuthResponse;

  constructor(private httpClient: HttpClient) {
    const config = window['config']();
    this.url = config.API;
    this.storagePrefix = config.STORAGEPREFIX;
  }

  login(args: { username: string, password: string }): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.url}/login`, args)
      .pipe(
        catchError(errorRes => throwError(errorRes.message)),
        tap(({ token }) => localStorage.setItem(`${this.storagePrefix}-token`, token))
      );
  }

  logout() {
    localStorage.removeItem(`${this.storagePrefix}-token`);
  }
}

interface AuthResponse {
  name: string,
  role: string,
  token: string,
  uid: string
}