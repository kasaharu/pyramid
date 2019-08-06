import { TestBed } from '@angular/core/testing';

import { BrowserApiService } from './browser-api.service';

describe('BrowserApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserApiService = TestBed.get(BrowserApiService);
    expect(service).toBeTruthy();
  });
});
