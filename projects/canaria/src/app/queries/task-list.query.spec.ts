import { TestBed } from '@angular/core/testing';

import { TaskListQuery } from './task-list.query';

describe('TaskListQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const query: TaskListQuery = TestBed.get(TaskListQuery);
    expect(query).toBeTruthy();
  });
});
