import { TestBed } from '@angular/core/testing';

import { FullereneService } from './fullerene.service';

describe('FullereneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullereneService = TestBed.get(FullereneService);
    expect(service).toBeTruthy();
  });
});
