import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

import {
  Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild,
  CanLoad } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  @select(['auth', 'authenticated']) isAuthenticated$:  Observable<any>;
  authenticated = false;

  constructor(private router: Router) {
    this.isAuthenticated$.subscribe(val => {
      this.authenticated = val;
    });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkAndNavigate(next, state);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkAndNavigate(next, state);
  }

  canLoad(): boolean {
    if (this.authenticated) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  private checkAndNavigate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticated) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
