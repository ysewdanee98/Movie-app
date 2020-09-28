import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../providers/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService, private route: ActivatedRoute) {
    this.isChecked = false;
  }

  ngOnInit(): void {
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  isChecked: boolean;
  label: string;

  rememberMe(check: boolean) {
    this.isChecked = check;
  }

  get primEmail(){
    return this.userData.get('primaryEmail');
  }

  get password(){
    return this.userData.get('password');
  }

  get f() { return this.userData.controls; }

  userData = new FormGroup({
    primaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$")]),

    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)])
  });

  returnUrl: string;

  signIn(){
    if (this.userData.invalid) {
      console.log("There is error");
      // return;
    } else {
      console.log("No error found");
      // this.route.navigateByUrl('/home');
      this.authenticationService.login(this.f.primaryEmail.value, this.f.password.value)
      .pipe()
      .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
      );
    }
  }

  hide = true;

}
