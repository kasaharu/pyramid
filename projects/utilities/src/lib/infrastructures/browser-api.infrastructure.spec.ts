import { TestBed } from '@angular/core/testing';

import { BrowserApiInfrastructure } from './browser-api.infrastructure';

describe('BrowserApiInfrastructure', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const infra: BrowserApiInfrastructure = TestBed.get(BrowserApiInfrastructure);
    expect(infra).toBeTruthy();
  });
});
