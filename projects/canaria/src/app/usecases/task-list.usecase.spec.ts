import { TestBed } from '@angular/core/testing';

import { TaskListUsecase } from './task-list.usecase';

describe('TaskListUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const usecase: TaskListUsecase = TestBed.get(TaskListUsecase);
    expect(usecase).toBeTruthy();
  });
});
