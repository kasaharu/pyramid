import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../domain/models';
import { TaskListUsecase } from '../../applications/task-list.usecase';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private usecase: TaskListUsecase) {}

  ngOnInit() {}

  createTask(task: Task) {
    this.usecase.createTask(task);
  }
}
