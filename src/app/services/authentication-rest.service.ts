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

  constructor(private httpClient: HttpClient) {
    const config = window['config']();
    this.url = config.API;
    this.storagePrefix = config.STORAGEPREFIX;
  }

  login(args: { username: string, password: string }) {
    return this.httpClient.post(`${this.url}/login`, args, { responseType: 'text' })
      .pipe(
        catchError(({ error }) => throwError(error.message)),
        tap(token => localStorage.setItem(`${this.storagePrefix}-token`, token))
      );
  }

  logout() {
    localStorage.removeItem(`${this.storagePrefix}-token`);
  }
}