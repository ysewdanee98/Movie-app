import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) {
    this.isChecked = false;
  }

  ngOnInit(): void {
  }

  emailValue: string;
  passwordValue: string;

  isChecked: boolean;
  label: string;

  rememberMe(check: boolean) {
    this.isChecked = check;
  }

  get primEmail(){
    return this.user.get('primaryEmail');
  }

  get password(){
    return this.user.get('password');
  }

  user = new FormGroup({
    primaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),

    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)])
  });

  signIn(){
    if (this.user.invalid) {
      console.log("There is error");
      // return;
    } else {
      console.log("No error found");
      this.route.navigateByUrl('/home');
    }
  }

}
