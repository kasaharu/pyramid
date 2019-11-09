import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FullereneModule } from 'fullerene';
import { TaskFormComponent } from './ui/task-form/task-form.component';
import { TaskItemComponent } from './ui/task-item/task-item.component';
import { TaskListComponent } from './ui/task-list/task-list.component';
import { TasksComponent } from './ui/tasks/tasks.component';

@NgModule({
  declarations: [TasksComponent, TaskListComponent, TaskItemComponent, TaskFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, MatIconModule, MatListModule, FullereneModule],
})
export class TaskModule {}
