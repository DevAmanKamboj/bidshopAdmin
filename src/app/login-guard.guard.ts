import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  token: String;
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.token = localStorage.getItem('token');
    // if(this.token==null)
    if (this.token == null || this.token == '') {
      this.router.navigate(['/']);
      return false;
    }
    else
      return true;
  }

}
