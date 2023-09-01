import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm=new FormGroup({
    type:new FormControl(''),
    mobile:new FormControl(''),
    title:new FormControl(''),

  })
}
