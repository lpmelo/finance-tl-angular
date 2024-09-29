import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const loginFormInitialState = new FormGroup({
  username: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup = loginFormInitialState;

  login(e: MouseEvent) {
    e.preventDefault();
    window.location.replace('/home');
  }

  onSubmit() {
    if (this.loginForm.valid) {
    }
  }
}
