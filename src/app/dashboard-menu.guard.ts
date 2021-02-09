import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardMenuGuard implements CanActivateChild {

  token: String;
  constructor(private router: Router) { }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    this.token = localStorage.getItem('token');
    // if(this.token==null)
    if (this.token == null || this.token == '') {
      this.router.navigate(['/']);
      return false;
    }
    else {
      return true;
    }
  }

}
