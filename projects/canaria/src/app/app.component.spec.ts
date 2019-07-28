import { async, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { Authenticator } from 'utilities';
import { AppComponent } from './app.component';

// NOTE: テスト用のダミーデータ
//       ref. https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
const firebase = { apiKey: 'dummy', authDomain: '', databaseURL: '', projectId: '', storageBucket: '', messagingSenderId: '' };

class MockAuthenticator {
  login() {}
  logout() {}
}

describe('AppComponent', () => {
  let authenticator: Authenticator;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AngularFireModule.initializeApp(firebase), AngularFireAuthModule],
      declarations: [AppComponent],
      providers: [{ provide: Authenticator, useClass: MockAuthenticator }],
    }).compileComponents();

    authenticator = TestBed.get(Authenticator);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('call login() method', () => {
    spyOn(authenticator, 'login');

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.login();
    expect(authenticator.login).toHaveBeenCalled();
  });

  it('call logout() method', () => {
    spyOn(authenticator, 'logout');

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.logout();
    expect(authenticator.logout).toHaveBeenCalled();
  });
});
