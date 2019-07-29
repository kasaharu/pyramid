import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../domain/models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  constructor() {}
  @Input()
  task: Task;

  ngOnInit() {}
}
