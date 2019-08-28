import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Authenticator } from 'utilities';
import { LoginUsecase } from '../../../../usecases/login.usecase';
import { LoginComponent } from './login.component';

// NOTE: テスト用のダミーデータ
//       ref. https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
const firebase = { apiKey: 'dummy', authDomain: '', databaseURL: '', projectId: '', storageBucket: '', messagingSenderId: '' };

class MockAuthenticator {}

class MockLoginUsecase {
  login() {}
  logout() {}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginUsecase: LoginUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [AngularFireModule.initializeApp(firebase), AngularFireAuthModule],
      providers: [{ provide: Authenticator, useClass: MockAuthenticator }, { provide: LoginUsecase, useClass: MockLoginUsecase }],
    }).compileComponents();

    loginUsecase = TestBed.get(LoginUsecase);
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
    spyOn(loginUsecase, 'login');

    const app = fixture.debugElement.componentInstance;
    app.login();
    expect(loginUsecase.login).toHaveBeenCalled();
  });

  it('call logout() method', () => {
    spyOn(loginUsecase, 'logout');

    const app = fixture.debugElement.componentInstance;
    app.logout();
    expect(loginUsecase.logout).toHaveBeenCalled();
  });
});
