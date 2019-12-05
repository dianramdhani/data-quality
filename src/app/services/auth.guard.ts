import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private helper: JwtHelperService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const storagePrefix = window['config']().STORAGEPREFIX,
      token = localStorage.getItem(`${storagePrefix}-token`);

    if (!!token) {
      const user = this.helper.decodeToken(token),
        role = next.data.role;
      if (user.role === role) {
        return true;
      }
    }

    this.router.navigate(['/login']);
  }
}