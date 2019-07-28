import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Authenticator } from 'utilities';
import { HomeComponent } from './home.component';

// NOTE: テスト用のダミーデータ
//       ref. https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
const firebase = { apiKey: 'dummy', authDomain: '', databaseURL: '', projectId: '', storageBucket: '', messagingSenderId: '' };

class MockAuthenticator {
  login() {}
  logout() {}
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let authenticator: Authenticator;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [AngularFireModule.initializeApp(firebase), AngularFireAuthModule],
      providers: [{ provide: Authenticator, useClass: MockAuthenticator }],
    }).compileComponents();

    authenticator = TestBed.get(Authenticator);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
