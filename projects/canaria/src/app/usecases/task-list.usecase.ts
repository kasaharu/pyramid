import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Task } from '../domain/models';
import { DatabaseAdapter } from '../infrastructures/database-adapter';
import { TaskStoreActions, TaskStoreSelectors } from '../store/task-store';

@Injectable({
  providedIn: 'root',
})
export class TaskListUsecase {
  constructor(private store$: Store<{}>, private dbAdapter: DatabaseAdapter) {}

  async initialize() {
    const taskList$ = this.dbAdapter.fetchCollection<Task>('tasks');
    const taskList = await taskList$.pipe(take(1)).toPromise();
    this.store$.dispatch(TaskStoreActions.saveTaskList(taskList));
  }

  async createTask(task: Task) {
    const createdTask = await this.dbAdapter.createDocument<Task>('tasks', task);
    this.store$.dispatch(TaskStoreActions.createTask(createdTask));
  }

  async updateTaskStatus(taskId: string) {
    const selectedTask$: Observable<Task | undefined> = this.store$.pipe(select(TaskStoreSelectors.selectTaskById, { id: taskId }));
    const selectedTask: Task | undefined = await selectedTask$.pipe(take(1)).toPromise();
    if (!selectedTask) {
      return;
    }

    const updatingTask: Task = { ...selectedTask, isCompleted: !selectedTask.isCompleted };
    await this.dbAdapter.updateDocument<Task>('tasks', updatingTask, taskId);

    // TODO: Reducer で immutable に 1 つの item だけ変更するのが難しいので一度全入れ替えするために取得
    const taskList$ = this.dbAdapter.fetchCollection<Task>('tasks');
    const taskList = await taskList$.pipe(take(1)).toPromise();
    this.store$.dispatch(TaskStoreActions.updateTask(taskList));
  }

  async deleteTask(taskId: string) {
    const deletedTaskId = await this.dbAdapter.deleteDocument<Task>('tasks', taskId);
    this.store$.dispatch(TaskStoreActions.deleteTask(deletedTaskId));
  }
}
