import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Task } from '../../../domain/models';
import { featureName as TaskStoreFeatureName } from '../store';
import { TaskListQuery } from './task-list.query';

describe('TaskListQuery', () => {
  let query: TaskListQuery;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            [TaskStoreFeatureName]: { taskList: [] },
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
      const taskList: Task[] = [{ id: '1', title: 'test', isCompleted: false }];
      const newState = { [TaskStoreFeatureName]: { taskList } };
      store$.setState(newState);

      query.taskList$.subscribe((value) => expect(value).toEqual(taskList));
    });
  });

  describe('todoList$', () => {
    it('default', () => {
      query.todoList$.subscribe((value) => expect(value).toEqual([]));
    });

    it('updated', () => {
      const taskList: Task[] = [{ id: '1', title: 'test1', isCompleted: false }, { id: '2', title: 'test2', isCompleted: true }];
      const newState = { [TaskStoreFeatureName]: { taskList } };
      const expected: Task[] = [{ id: '1', title: 'test1', isCompleted: false }];
      store$.setState(newState);

      query.todoList$.subscribe((value) => expect(value).toEqual(expected));
    });
  });

  describe('doneList$', () => {
    it('default', () => {
      query.doneList$.subscribe((value) => expect(value).toEqual([]));
    });

    it('updated', () => {
      const taskList: Task[] = [{ id: '1', title: 'test1', isCompleted: false }, { id: '2', title: 'test2', isCompleted: true }];
      const newState = { [TaskStoreFeatureName]: { taskList } };
      const expected: Task[] = [{ id: '2', title: 'test2', isCompleted: true }];
      store$.setState(newState);

      query.doneList$.subscribe((value) => expect(value).toEqual(expected));
    });
  });
});
