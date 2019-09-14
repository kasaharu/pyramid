import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { DatabaseAdapter } from 'utilities';
import { Task } from '../domain/models';
import { selectCurrentUser as CurrentUserStoreSelectorSelectCurrentUser } from '../store/current-user-store';
import {
  createTask as TaskStoreActionCreateTask,
  deleteTask as TaskStoreActionDeleteTask,
  saveTaskList as TaskStoreActionSaveTaskList,
  selectTaskById as TaskStoreSelectorSelectTaskById,
  updateTask as TaskStoreActionUpdateTask,
} from '../store/task-store';

@Injectable({
  providedIn: 'root',
})
export class TaskListUsecase {
  constructor(private store$: Store<{}>, private dbAdapter: DatabaseAdapter) {}

  async initialize() {
    const currentUser$ = this.store$.pipe(select(CurrentUserStoreSelectorSelectCurrentUser));
    const currentUser = await currentUser$.pipe(take(1)).toPromise();
    if (!currentUser) {
      return;
    }
    const taskList$ = this.dbAdapter.fetchCollectionWhere<Task>('tasks', { key: 'userId', value: currentUser.uid });
    const taskList = await taskList$.pipe(take(1)).toPromise();
    this.store$.dispatch(TaskStoreActionSaveTaskList(taskList));
  }

  async createTask(task: Task) {
    const currentUser$ = this.store$.pipe(select(CurrentUserStoreSelectorSelectCurrentUser));
    const currentUser = await currentUser$.pipe(take(1)).toPromise();
    if (!currentUser) {
      return;
    }
    const createdTask = await this.dbAdapter.createDocument<Task>('tasks', { ...task, userId: currentUser.uid });
    this.store$.dispatch(TaskStoreActionCreateTask(createdTask));
  }

  async updateTaskStatus(taskId: string) {
    const selectedTask$: Observable<Task | undefined> = this.store$.pipe(select(TaskStoreSelectorSelectTaskById, { id: taskId }));
    const selectedTask: Task | undefined = await selectedTask$.pipe(take(1)).toPromise();
    if (!selectedTask) {
      return;
    }

    const updatingTask: Task = { ...selectedTask, isCompleted: !selectedTask.isCompleted };
    await this.dbAdapter.updateDocument<Task>('tasks', updatingTask, taskId);
    this.store$.dispatch(TaskStoreActionUpdateTask(updatingTask));
  }

  async deleteTask(taskId: string) {
    const deletedTaskId = await this.dbAdapter.deleteDocument<Task>('tasks', taskId);
    this.store$.dispatch(TaskStoreActionDeleteTask(deletedTaskId));
  }
}
