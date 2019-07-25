import { TestBed } from '@angular/core/testing';

import { Authenticator } from './authenticator';

describe('Authenticator', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Authenticator = TestBed.get(Authenticator);
    expect(service).toBeTruthy();
  });
});
