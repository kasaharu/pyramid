import { Injectable } from '@angular/core';
import { Authenticator } from 'utilities';

@Injectable({
  providedIn: 'root',
})
export class LoginUsecase {
  constructor(private authenticator: Authenticator) {}

  login() {
    this.authenticator.login();
  }

  logout() {
    this.authenticator.logout();
  }
}
