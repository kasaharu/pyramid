import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';
import { DatabaseAdapter } from 'utilities';
import { Task, CurrentUser } from '../domain/models';
import { CurrentUserStoreSelectors } from '../store/current-user-store';
import { TaskStoreActions, TaskStoreSelectors } from '../store/task-store';
import { TaskListUsecase } from './task-list.usecase';

class MockDatabaseAdapter {
  fetchCollection() {}
  createDocument() {}
  updateDocument() {}
  deleteDocument() {}
}

describe('TaskListUsecase', () => {
  let usecase: TaskListUsecase;
  let dbAdapter: DatabaseAdapter;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            [CurrentUserStoreSelectors.featureName]: {
              currentUser: null,
            },
            [TaskStoreSelectors.featureName]: {
              taskList: [],
            },
          },
        }),
        { provide: DatabaseAdapter, useClass: MockDatabaseAdapter },
      ],
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

    const saveAction = TaskStoreActions.saveTaskList(taskList);
    const expected: Array<any> = [saveAction];

    const actions: Array<any> = [];
    store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
    await usecase.initialize();
    expect(actions).toEqual(expected);
  });

  describe('call createTask()', () => {
    it('currentUser が取得できる場合 action が dispatch される', async () => {
      const currentUser: CurrentUser = { uid: 'uid1' };
      store$.setState({ [CurrentUserStoreSelectors.featureName]: { currentUser } });
      const task: Task = { id: '1', title: 'test', isCompleted: false };
      const taskWithUserId = { ...task, userId: 'uid1' };
      spyOn(dbAdapter, 'createDocument').and.returnValue(of(taskWithUserId).toPromise());
      const createAction = TaskStoreActions.createTask(taskWithUserId);
      const expected: Array<any> = [createAction];
      const actions: Array<any> = [];
      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
      await usecase.createTask(task);
      expect(actions).toEqual(expected);
    });

    it('currentUser が取得できない場合 action が dispatch されない', async () => {
      const task: Task = { id: '1', title: 'test', isCompleted: false };
      const expected: Array<any> = [];
      const actions: Array<any> = [];
      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
      await usecase.createTask(task);

      expect(actions).toEqual(expected);
    });
  });

  describe('call updateTaskStatus()', async () => {
    it('選択した ID に一致するタスクがある場合', async () => {
      const updatedTask: Task = { id: '1', title: 'test', isCompleted: true };
      const taskList: Task[] = [{ id: '1', title: 'test', isCompleted: false }];
      store$.setState({ [TaskStoreSelectors.featureName]: { taskList } });
      spyOn(dbAdapter, 'updateDocument');

      const updateAction = TaskStoreActions.updateTask(updatedTask);
      const expected: Array<any> = [updateAction];

      const actions: Array<any> = [];
      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
      await usecase.updateTaskStatus(updatedTask.id);
      expect(actions).toEqual(expected);
    });

    it('選択した ID に一致するタスクがない場合', async () => {
      const updatedTask: Task = { id: '2', title: 'test', isCompleted: false };
      const taskList: Task[] = [{ id: '1', title: 'test', isCompleted: false }];
      store$.setState({ [TaskStoreSelectors.featureName]: { taskList } });

      const actions: Array<any> = [];
      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
      await usecase.updateTaskStatus(updatedTask.id);
      expect(actions).toEqual([]);
    });
  });

  it('call deleteTask()', async () => {
    const taskId = '1';
    spyOn(dbAdapter, 'deleteDocument').and.returnValue(of(taskId).toPromise());
    const deleteTaskAction = TaskStoreActions.deleteTask(taskId);
    const expected: Array<any> = [deleteTaskAction];

    const actions: Array<any> = [];
    store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
    await usecase.deleteTask(taskId);
    expect(actions).toEqual(expected);
  });
});
