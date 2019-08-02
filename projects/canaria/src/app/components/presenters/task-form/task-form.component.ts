import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  taskForm = this.fb.group({
    title: ['', Validators.required],
    isCompleted: [false],
  });

  ngOnInit() {}

  onSubmit() {
    console.log(this.taskForm.value);
  }
}
