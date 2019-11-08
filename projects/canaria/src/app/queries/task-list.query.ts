import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../domain/models';
import { selectStateFromTaskStore } from '../features/tasks/task-store';

@Injectable({
  providedIn: 'root',
})
export class TaskListQuery {
  constructor(private store$: Store<{}>) {}

  taskList$: Observable<Task[]> = selectStateFromTaskStore(this.store$, (state) => state.taskList);
}
