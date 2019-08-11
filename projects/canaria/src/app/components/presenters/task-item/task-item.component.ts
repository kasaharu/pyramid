import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../domain/models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  constructor() {}
  @Input()
  task: Task;
  @Output()
  requestDeleteTask = new EventEmitter<string>();

  get taskStatusText() {
    return this.task.isCompleted ? '完了' : '新規';
  }

  ngOnInit() {}

  clickDeleteButton(taskId: string) {
    this.requestDeleteTask.emit(taskId);
  }
}
