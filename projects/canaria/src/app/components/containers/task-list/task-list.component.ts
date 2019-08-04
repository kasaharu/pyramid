import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormedTask, Task } from '../../../domain/models';
import { TaskListQuery } from '../../../queries/task-list.query';
import { TaskListUsecase } from '../../../usecases/task-list.usecase';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private query: TaskListQuery, private usecase: TaskListUsecase) {}
  taskList$: Observable<Task[] | null> = this.query.taskList$;

  ngOnInit() {}

  createTask(task: FormedTask) {
    this.usecase.addTask(task);
  }
}
