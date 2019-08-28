import { TestBed } from '@angular/core/testing';

import { LoginUsecase } from './login.usecase';

describe('LoginUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const usecase: LoginUsecase = TestBed.get(LoginUsecase);
    expect(usecase).toBeTruthy();
  });
});
