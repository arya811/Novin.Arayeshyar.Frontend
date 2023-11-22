import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}
  loginForm = this.fb.group({
    mobile: [
      '',
      [
        Validators.required,
        Validators.maxLength(11),
        Validators.pattern(/^09\d{9}$/),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*d).+'),
      ],
    ],
  });
  matcher = new MyErrorStateMatcher();
  show() {
    console.log(this.loginForm.value);
  }
  hide = true;
  constructor(public http : HttpClient){}
  check(){
    this.http.post('https://localhost:7188/adminlogin');
  }
}



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
