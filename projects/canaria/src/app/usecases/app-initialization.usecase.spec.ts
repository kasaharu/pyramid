import { TestBed } from '@angular/core/testing';

import { AppInitializationUsecase } from './app-initialization.usecase';

describe('AppInitializationUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const usecase: AppInitializationUsecase = TestBed.get(AppInitializationUsecase);
    expect(usecase).toBeTruthy();
  });
});
