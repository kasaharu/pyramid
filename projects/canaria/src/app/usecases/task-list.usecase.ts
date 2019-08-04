import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormedTask, Task } from '../domain/models';
import { TaskStoreActions } from '../store/task-store';

@Injectable({
  providedIn: 'root',
})
export class TaskListUsecase {
  constructor(private store$: Store<{}>) {}

  addTask(taskWithoutId: FormedTask) {
    const task: Task = { ...taskWithoutId, id: 1 };
    this.store$.dispatch(TaskStoreActions.save(task));
  }
}
