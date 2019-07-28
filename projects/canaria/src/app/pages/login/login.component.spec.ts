import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Authenticator } from 'utilities';

import { LoginComponent } from './login.component';

// NOTE: テスト用のダミーデータ
//       ref. https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
const firebase = { apiKey: 'dummy', authDomain: '', databaseURL: '', projectId: '', storageBucket: '', messagingSenderId: '' };

class MockAuthenticator {
  login() {}
  logout() {}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticator: Authenticator;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [AngularFireModule.initializeApp(firebase), AngularFireAuthModule],
      providers: [{ provide: Authenticator, useClass: MockAuthenticator }],
    }).compileComponents();

    authenticator = TestBed.get(Authenticator);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call login() method', () => {
    spyOn(authenticator, 'login');

    const app = fixture.debugElement.componentInstance;
    app.login();
    expect(authenticator.login).toHaveBeenCalled();
  });

  it('call logout() method', () => {
    spyOn(authenticator, 'logout');

    const app = fixture.debugElement.componentInstance;
    app.logout();
    expect(authenticator.logout).toHaveBeenCalled();
  });
});
