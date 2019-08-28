import { Component, OnInit } from '@angular/core';
import { Authenticator } from 'utilities';
import { LoginUsecase } from '../../../../usecases/login.usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authenticator: Authenticator, private loginUsecase: LoginUsecase) {}
  user$ = this.authenticator.loggedInUser$;

  login() {
    this.loginUsecase.login();
  }

  logout() {
    this.loginUsecase.logout();
  }

  ngOnInit() {}
}
