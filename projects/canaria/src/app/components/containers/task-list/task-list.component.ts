import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormedTask, Task } from '../../../domain/models';

import { TaskListUsecase } from '../../../usecases/task-list.usecase';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private usecase: TaskListUsecase) {}
  taskList$: Observable<Task[] | null> = of(null);

  ngOnInit() {
    this.taskList$ = of([
      { id: 1, title: 'task 1', isCompleted: false },
      { id: 2, title: 'task 2', isCompleted: true },
      { id: 3, title: 'task 3', isCompleted: false },
    ]);
  }

  createTask(task: FormedTask) {
    this.usecase.addTask(task);
  }
}
