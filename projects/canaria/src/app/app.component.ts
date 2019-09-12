import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Authenticator } from 'utilities';
import { AppInitializationUsecase } from './usecases/app-initialization.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private authenticator: Authenticator, private appInitializationUsecase: AppInitializationUsecase) {}
  readonly appTitle = 'Canaria';
  readonly onDestroy$ = new Subject();

  ngOnInit() {
    this.authenticator.loggedInUser$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((loggedInUser) => this.appInitializationUsecase.saveUserInfo(loggedInUser));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
