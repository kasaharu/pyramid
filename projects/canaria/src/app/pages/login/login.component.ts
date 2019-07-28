import { Component, OnInit } from '@angular/core';
import { Authenticator } from 'utilities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authenticator: Authenticator) {}
  user$ = this.authenticator.loggedInUser$;

  login() {
    this.authenticator.login();
  }
  logout() {
    this.authenticator.logout();
  }

  ngOnInit() {}
}
