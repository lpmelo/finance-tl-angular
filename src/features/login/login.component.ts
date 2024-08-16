import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login(e: MouseEvent) {
    e.preventDefault();
    window.location.replace('/home');
  }
}
