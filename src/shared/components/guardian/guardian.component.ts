import { Component, inject, OnInit } from '@angular/core';
import {
  AuthResponseI,
  AuthServiceService,
} from '../../../core/auth-service/auth-service.service';
import { Store } from '@ngrx/store';
import {
  clearUserSettings,
  saveUserToken,
} from '../../../store/settings-reducer/settings.actions';

@Component({
  selector: 'guardian',
  templateUrl: './guardian.component.html',
  styleUrl: './guardian.component.scss',
})
export class GuardianComponent implements OnInit {
  waitingCheck = false;
  outRoutes = ['/login', '/signup'];
  authService = inject(AuthServiceService);
  store = inject(Store);

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

          this.sendUserTokenToStore(httpResponse.token);

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
          this.clearUserData();
          this.hasToReturnToLoginPage(actualUrl);
        });
    } else {
      this.clearUserData();
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

  sendUserTokenToStore(authToken: string) {
    this.store.dispatch(saveUserToken({ token: authToken }));
  }

  clearUserData() {
    this.store.dispatch(clearUserSettings());
  }
}
