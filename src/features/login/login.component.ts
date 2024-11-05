import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AuthResponseI,
  AuthServiceService,
} from '../../core/auth-service/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { openToast } from '../../shared/helpers/functions';

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
  private _snackBar = inject(MatSnackBar);

  loading: boolean = false;
  getLoading() {
    return this.loading;
  }
  setLoading(value: boolean) {
    this.loading = value;
  }

  constructor(private authService: AuthServiceService) {}

  async onSubmit() {
    if (this.loginForm.valid) {
      const payload = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      };

      this.setLoading(true);
      await this.authService
        .login(payload)
        .then((response) => {
          const httpResponse = response as AuthResponseI;

          openToast(this._snackBar, 'success', httpResponse?.message, 1500);

          window.localStorage.setItem("authToken", httpResponse.token);

          window.location.replace('/home');
        })
        .catch((error) => {
          openToast(this._snackBar, 'error', error?.error?.error, 5000);
        });
      this.setLoading(false);
    }
  }
}
