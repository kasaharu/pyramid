import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticator } from 'utilities';

@Injectable({
  providedIn: 'root',
})
export class LoginUsecase {
  constructor(private router: Router, private authenticator: Authenticator) {}

  async login() {
    await this.authenticator.login();
    this.router.navigateByUrl('/home');
  }

  async logout() {
    await this.authenticator.logout();
    this.router.navigateByUrl('/login');
  }
}
