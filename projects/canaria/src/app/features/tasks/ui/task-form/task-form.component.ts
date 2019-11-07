import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task } from '../../../../domain/models';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  @Output()
  requestCreateTask = new EventEmitter<Task>();
  readonly placeholderText = 'task のタイトルを入力';

  taskForm = this.fb.group({
    id: [''],
    title: ['', Validators.required],
    isCompleted: [false],
  });

  ngOnInit() {}

  onSubmit() {
    this.requestCreateTask.emit(this.taskForm.value);
    this.taskForm.reset();
  }
}
