import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../../domain/models';
import { selectStateFromTaskStore } from '../store';

@Injectable({
  providedIn: 'root',
})
export class TaskListQuery {
  constructor(private store$: Store<{}>) {}

  taskList$: Observable<Task[]> = selectStateFromTaskStore(this.store$, (state) => state.taskList);
  todoList$: Observable<Task[]> = selectStateFromTaskStore(this.store$, (state) => {
    if (state.taskList.length) {
      return state.taskList.filter((task) => !task.isCompleted);
    }
    return state.taskList;
  });
  doneList$: Observable<Task[]> = selectStateFromTaskStore(this.store$, (state) => {
    if (state.taskList.length) {
      return state.taskList.filter((task) => task.isCompleted);
    }
    return state.taskList;
  });
}
