import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'


@Injectable()
export class AuthGuard implements CanActivate {

  private authenticationChanged = new Subject<boolean>();

  constructor(private router: Router) { }

  static isAuthenticated(): boolean {
    return true || !!AuthGuard.getToken()
  }

  static getToken(): string {
    return window.localStorage['token']
  }

  public isAuthenticationChanged():any {
    return this.authenticationChanged.asObservable()
  }

  public setToken(value: string): void {
    window.localStorage['token'] = value
    this.authenticationChanged.next(AuthGuard.isAuthenticated())
  }

  public logout():void {
    this.setToken(undefined)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (AuthGuard.isAuthenticated())
      return true

    this.router.navigate(['/login'])
    return false
  }
}