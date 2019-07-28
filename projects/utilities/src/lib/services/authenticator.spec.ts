import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Authenticator } from './authenticator';

// NOTE: テスト用のダミーデータ
//       ref. https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
const firebase = { apiKey: 'dummy', authDomain: '', databaseURL: '', projectId: '', storageBucket: '', messagingSenderId: '' };

describe('Authenticator', () => {
  let afAuth: AngularFireAuth;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebase), AngularFireAuthModule],
    });

    afAuth = TestBed.get(AngularFireAuth);
  });

  it('should be created', () => {
    const service: Authenticator = TestBed.get(Authenticator);
    expect(service).toBeTruthy();
  });

  it('call login() method', () => {
    spyOn(afAuth.auth, 'signInWithPopup');
    const service: Authenticator = TestBed.get(Authenticator);
    service.login();
    expect(afAuth.auth.signInWithPopup).toHaveBeenCalled();
  });

  it('call logout() method', () => {
    spyOn(afAuth.auth, 'signOut');
    const service: Authenticator = TestBed.get(Authenticator);
    service.logout();
    expect(afAuth.auth.signOut).toHaveBeenCalled();
  });
});
