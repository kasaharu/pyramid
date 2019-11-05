import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Authenticator } from 'utilities';
import { LoginUsecase } from './login.usecase';

class MockAuthenticator {
  login() {}
  logout() {}
}

describe('LoginUsecase', () => {
  let usecase: LoginUsecase;
  let router: Router;
  let authenticator: Authenticator;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: Router, useValue: routerSpy }, { provide: Authenticator, useClass: MockAuthenticator }],
    });

    usecase = TestBed.get(LoginUsecase);
    authenticator = TestBed.get(Authenticator);
    router = TestBed.get(Router);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  it('call login() method', async () => {
    spyOn(authenticator, 'login');

    await usecase.login();
    expect(authenticator.login).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });

  it('call logout() method', async () => {
    spyOn(authenticator, 'logout');

    await usecase.logout();
    expect(authenticator.logout).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  });
});
