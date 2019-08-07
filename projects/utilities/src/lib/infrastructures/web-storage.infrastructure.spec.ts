import { TestBed } from '@angular/core/testing';

import { WebStorageInfrastructure } from './web-storage.infrastructure';

describe('WebStorageInfrastructure', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const infra: WebStorageInfrastructure = TestBed.get(WebStorageInfrastructure);
    expect(infra).toBeTruthy();
  });
});
