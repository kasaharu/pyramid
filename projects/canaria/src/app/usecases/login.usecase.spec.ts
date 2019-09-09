import { TestBed } from '@angular/core/testing';
import { Authenticator } from 'utilities';
import { LoginUsecase } from './login.usecase';

class MockAuthenticator {
  login() {}
  logout() {}
}

describe('LoginUsecase', () => {
  let usecase: LoginUsecase;
  let authenticator: Authenticator;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Authenticator, useClass: MockAuthenticator }],
    });

    usecase = TestBed.get(LoginUsecase);
    authenticator = TestBed.get(Authenticator);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  it('call login() method', () => {
    spyOn(authenticator, 'login');

    usecase.login();
    expect(authenticator.login).toHaveBeenCalled();
  });

  it('call logout() method', () => {
    spyOn(authenticator, 'logout');

    usecase.logout();
    expect(authenticator.logout).toHaveBeenCalled();
  });
});
