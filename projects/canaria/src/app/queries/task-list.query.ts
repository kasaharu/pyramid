import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../domain/models';
import { createTaskStoreSelector } from '../store/task-store';

@Injectable({
  providedIn: 'root',
})
export class TaskListQuery {
  constructor(private store$: Store<{}>) {}

  taskList$: Observable<Task[]> = this.store$.pipe(select(createTaskStoreSelector((state) => state.taskList)));
}
