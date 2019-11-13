import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  todoList$: Observable<Task[]> = this.query.todoList$;
  doneList$: Observable<Task[]> = this.query.doneList$;

  ngOnInit() {
    this.usecase.initialize();
  }

  updateTaskStatus(taskId: string) {
    this.usecase.updateTaskStatus(taskId);
  }

  deleteTask(taskId: string) {
    this.usecase.deleteTask(taskId);
  }

  // TODO: Cdk が必要とするメソッドをテストするすべがあるか？
  /* istanbul ignore next */
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
