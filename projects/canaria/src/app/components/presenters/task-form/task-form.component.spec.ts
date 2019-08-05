import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call onSubmit', () => {
    spyOn(component.requestCreateTask, 'emit');
    const formParams = { title: '', isCompleted: false };
    component.taskForm.setValue(formParams);
    component.onSubmit();

    expect(component.requestCreateTask.emit).toHaveBeenCalledWith(formParams);
    expect(component.taskForm.value).toEqual({ title: null, isCompleted: null });
  });
});
