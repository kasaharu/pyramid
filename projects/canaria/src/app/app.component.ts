import { Component } from '@angular/core';
import { Authenticator } from 'utilities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authenticator: Authenticator) {}
  readonly appTitle = 'Canaria';
  user$ = this.authenticator.loggedInUser$;

  login() {
    this.authenticator.login();
  }
  logout() {
    this.authenticator.logout();
  }
}
