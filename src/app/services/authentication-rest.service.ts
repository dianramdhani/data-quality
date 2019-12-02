import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  login(args: { username: string, password: string }): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.url}/login`, args)
      .pipe(tap(({ token }) => localStorage.setItem(`${this.storagePrefix}-token`, token)))
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