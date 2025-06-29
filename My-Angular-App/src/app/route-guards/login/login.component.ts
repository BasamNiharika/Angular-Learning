import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // myform: FormGroup;
  // constructor() {
  //   this.myform = new FormGroup({
  //     name: new FormControl(''),
  //     password: new FormControl(''),
  //   });
  // }
  email: string = '';
  password: string = '';

  constructor(private router: Router, private auth: AuthService) {}

  isLogin() {
    const checkLogin = this.auth.login(this.email, this.password);
    if (checkLogin) {
      console.log('login',checkLogin);
      this.router.navigate(['/admin']);
    } else {
      alert('please enter email and password');
    }
  }
}
