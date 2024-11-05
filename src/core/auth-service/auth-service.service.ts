import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, take } from 'rxjs';

interface UserCredentialsI {
  username: string;
  password: string;
}

export interface AuthResponseI {
  message: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  apiAuthUrl = `${environment.apiBaseUrl}/auth/login`;
  apiCheckUrl = `${environment.apiBaseUrl}/auth/check`;

  constructor(private http: HttpClient) {}

  async login(userCredentials: UserCredentialsI) {
    const request = this.http
      .post(this.apiAuthUrl, userCredentials)
      .pipe(take(1));

    return await lastValueFrom(request);
  }

  async check(token: string) {
    if (token) {
      const request = this.http
        .post(this.apiCheckUrl, {}, { headers: { Authorization: `Bearer ${token}` } })
        .pipe(take(1));

      return await lastValueFrom(request);
    }

    return false;
  }
}
