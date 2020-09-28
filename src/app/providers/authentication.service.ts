import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private route: Router) { }

  login(primaryEmail: string, password: string) {
    return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
      .pipe(map((data: any) => {
      if (data != null) {
        // console.log(data);
        if(data.success == true){
          localStorage.setItem('Email', primaryEmail);
          localStorage.setItem('token', data.request_token);
        }
      }
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
