import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginForm } from '../types/login';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _http = inject(HttpClient);

  login(form: LoginForm) {
    return this._http.post(`${environment.apiURL}/auth/login`, { ...form });
  }
}
