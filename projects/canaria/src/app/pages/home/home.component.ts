import { Component, OnInit } from '@angular/core';
import { Authenticator } from 'utilities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authenticator: Authenticator) {}
  readonly appTitle = 'Canaria';
  user$ = this.authenticator.loggedInUser$;

  login() {
    this.authenticator.login();
  }
  logout() {
    this.authenticator.logout();
  }

  ngOnInit() {}
}
