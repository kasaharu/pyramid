import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../../domain/models';
import { TaskListQuery } from '../../applications/task-list.query';
import { TaskListUsecase } from '../../applications/task-list.usecase';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private query: TaskListQuery, private usecase: TaskListUsecase) {}
  taskList$: Observable<Task[]> = this.query.taskList$;

  ngOnInit() {
    this.usecase.initialize();
  }

  createTask(task: Task) {
    this.usecase.createTask(task);
  }

  updateTaskStatus(taskId: string) {
    this.usecase.updateTaskStatus(taskId);
  }

  deleteTask(taskId: string) {
    this.usecase.deleteTask(taskId);
  }
}
