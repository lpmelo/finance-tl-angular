import { Component, inject, OnInit } from '@angular/core';
import {
  AuthResponseI,
  AuthServiceService,
} from '../../../core/auth-service/auth-service.service';

@Component({
  selector: 'guardian',
  templateUrl: './guardian.component.html',
  styleUrl: './guardian.component.scss',
})
export class GuardianComponent implements OnInit {
  waitingCheck = false;
  authService = inject(AuthServiceService);
  outRoutes = ['/login', '/signup'];

  ngOnInit(): void {
    this.verifyAuthentication();
  }

  async verifyAuthentication() {
    const authToken = localStorage.getItem('authToken');
    const actualUrl = window.location.pathname;
    this.waitingCheck = true;
    if (authToken) {
      await this.authService
        .check(authToken)
        .then((res) => {
          const httpResponse = res as AuthResponseI;
          localStorage.setItem('authToken', httpResponse.token);
          if (this.outRoutes.includes(actualUrl) || actualUrl === '/') {
            window.location.replace('/home');

            window.addEventListener('beforeunload', () => {
              this.waitingCheck = false;
            });
          } else {
            this.waitingCheck = false;
          }
        })
        .catch((err) => {
          localStorage.removeItem('authToken');
          this.hasToReturnToLoginPage(actualUrl);
        });
    } else {
      this.hasToReturnToLoginPage(actualUrl);
    }
  }

  hasToReturnToLoginPage(actualUrl: string) {
    if (!this.outRoutes.includes(actualUrl)) {
      window.location.replace('/login');

      window.addEventListener('beforeunload', () => {
        this.waitingCheck = false;
      });
    } else {
      this.waitingCheck = false;
    }
  }
}
