import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { FormedTask, Task } from '../../../domain/models';
import { TaskListQuery } from '../../../queries/task-list.query';
import { TaskListUsecase } from '../../../usecases/task-list.usecase';
import { TaskListComponent } from './task-list.component';

class MockTaskListQuery {
  taskList$ = new BehaviorSubject<Task[]>([]);
}

class MockTaskListUsecase {
  createTask() {}
}

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let usecase: TaskListUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: TaskListUsecase, useClass: MockTaskListUsecase }, { provide: TaskListQuery, useClass: MockTaskListQuery }],
    }).compileComponents();

    usecase = TestBed.get(TaskListUsecase);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call createTask()', () => {
    spyOn(usecase, 'createTask');
    const formedTask: FormedTask = { title: 'test', isCompleted: false };
    component.createTask(formedTask);

    expect(usecase.createTask).toHaveBeenCalledWith(formedTask);
  });
});
