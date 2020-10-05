import { Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService {

  constructor(private router: Router) { }

  canActivate(state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
        // logged in so return true
        return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }

}
