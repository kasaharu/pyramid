import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { skip } from 'rxjs/operators';
import { FormedTask, Task } from '../domain/models';
import { TaskStoreActions } from '../store/task-store';
import { TaskListUsecase } from './task-list.usecase';

describe('TaskListUsecase', () => {
  let usecase: TaskListUsecase;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: {} })],
    });

    usecase = TestBed.get(TaskListUsecase);
    store$ = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  it('call addTask()', () => {
    const formedTask: FormedTask = { title: 'test', isCompleted: false };
    const task: Task = { ...formedTask, id: 1 };
    const saveAction = TaskStoreActions.save(task);
    const expected: Array<any> = [saveAction];

    const actions: Array<any> = [];
    store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
    usecase.addTask(formedTask);
    expect(actions).toEqual(expected);
  });
});
