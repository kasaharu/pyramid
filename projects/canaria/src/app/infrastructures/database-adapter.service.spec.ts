import { TestBed } from '@angular/core/testing';

import { DatabaseAdapterService } from './database-adapter.service';

describe('DatabaseAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseAdapterService = TestBed.get(DatabaseAdapterService);
    expect(service).toBeTruthy();
  });
});
