import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Task } from '../domain/models';
import { DatabaseAdapter } from '../infrastructures/database-adapter';
import { TaskStoreActions } from '../store/task-store';

@Injectable({
  providedIn: 'root',
})
export class TaskListUsecase {
  constructor(private store$: Store<{}>, private dbAdapter: DatabaseAdapter) {}

  async initialize() {
    const taskList$ = this.dbAdapter.fetchCollection<Task>('tasks');
    const taskList = await taskList$.pipe(take(1)).toPromise();
    this.store$.dispatch(TaskStoreActions.save(taskList));
  }

  async createTask(task: Task) {
    const createdTask = await this.dbAdapter.createDocument('tasks', task);
    this.store$.dispatch(TaskStoreActions.create(createdTask));
  }
}
