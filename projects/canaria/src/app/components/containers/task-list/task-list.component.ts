import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormedTask, Task } from '../../../domain/models';
import { TaskListUsecase } from '../../../usecases/task-list.usecase';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private usecase: TaskListUsecase, private db: AngularFirestore) {}
  taskList$: Observable<Task[]> = this.db.collection<Task>('tasks').valueChanges();

  ngOnInit() {}

  createTask(task: FormedTask) {
    this.usecase.createTask(task);
  }
}
