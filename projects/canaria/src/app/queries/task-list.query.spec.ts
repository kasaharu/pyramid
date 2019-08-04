import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Task } from '../domain/models';
import { TaskStoreSelectors } from '../store/task-store';
import { TaskListQuery } from './task-list.query';

describe('TaskListQuery', () => {
  let query: TaskListQuery;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            [TaskStoreSelectors.featureName]: { taskList: [] },
          },
        }),
      ],
    });

    query = TestBed.get(TaskListQuery);
    store$ = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(query).toBeTruthy();
  });

  describe('taskList$', () => {
    it('default', () => {
      query.taskList$.subscribe((value) => expect(value).toEqual([]));
    });

    it('updated', () => {
      const taskList: Task[] = [{ id: 1, title: 'test', isCompleted: false }];
      const newState = { [TaskStoreSelectors.featureName]: { taskList } };
      store$.setState(newState);

      query.taskList$.subscribe((value) => expect(value).toEqual(taskList));
    });
  });
});