import { Component, OnInit } from '@angular/core';
import { Authenticator } from 'utilities';
import { AppInitializationUsecase } from './usecases/app-initialization.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authenticator: Authenticator, private appInitializationUsecase: AppInitializationUsecase) {}
  readonly appTitle = 'Canaria';

  ngOnInit() {
    this.authenticator.loggedInUser$.subscribe((loggedInUser) => this.appInitializationUsecase.saveUserInfo(loggedInUser));
  }
}
