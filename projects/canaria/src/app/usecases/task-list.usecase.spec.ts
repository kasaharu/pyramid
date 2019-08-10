import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Task } from '../domain/models';
import { DatabaseAdapter } from '../infrastructures/database-adapter';
import { TaskStoreActions } from '../store/task-store';
import { TaskListUsecase } from './task-list.usecase';

class MockDatabaseAdapter {
  fetchCollection() {}
}

describe('TaskListUsecase', () => {
  let usecase: TaskListUsecase;
  let dbAdapter: DatabaseAdapter;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: {} }), { provide: DatabaseAdapter, useClass: MockDatabaseAdapter }],
    });

    usecase = TestBed.get(TaskListUsecase);
    dbAdapter = TestBed.get(DatabaseAdapter);
    store$ = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  it('call initialize', async () => {
    const taskList: Task[] = [{ id: '1', title: 'test', isCompleted: false }];
    spyOn(dbAdapter, 'fetchCollection').and.returnValue(of(taskList));

    const saveAction = TaskStoreActions.save(taskList);
    const expected: Array<any> = [saveAction];

    const actions: Array<any> = [];
    store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
    await usecase.initialize();
    expect(actions).toEqual(expected);
  });

  it('call addTask()', () => {
    const formedTask: FormedTask = { title: 'test', isCompleted: false };
    const task: Task = { ...formedTask, id: 1 };
    const createAction = TaskStoreActions.create(task);
    const expected: Array<any> = [createAction];

    const actions: Array<any> = [];
    store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
    usecase.createTask(formedTask);
    expect(actions).toEqual(expected);
  });
});
