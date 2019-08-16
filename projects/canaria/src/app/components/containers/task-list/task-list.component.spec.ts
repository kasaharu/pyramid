import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../../domain/models';
import { TaskListQuery } from '../../../queries/task-list.query';
import { TaskListUsecase } from '../../../usecases/task-list.usecase';
import { TaskListComponent } from './task-list.component';

class MockTaskListQuery {
  taskList$ = new BehaviorSubject<Task[]>([]);
}

class MockTaskListUsecase {
  initialize() {}
  createTask() {}
  updateTaskStatus() {}
  deleteTask() {}
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

  it('call ngOnInit()', () => {
    spyOn(usecase, 'initialize');
    component.ngOnInit();

    expect(usecase.initialize).toHaveBeenCalled();
  });

  it('call createTask()', () => {
    spyOn(usecase, 'createTask');
    const task: Task = { id: '', title: 'test', isCompleted: false };
    component.createTask(task);

    expect(usecase.createTask).toHaveBeenCalledWith(task);
  });

  it('call updateTaskStatus()', () => {
    spyOn(usecase, 'updateTaskStatus');
    const taskId = '1';
    component.updateTaskStatus(taskId);

    expect(usecase.updateTaskStatus).toHaveBeenCalledWith(taskId);
  });

  it('call deleteTask()', () => {
    spyOn(usecase, 'deleteTask');
    component.deleteTask('1');

    expect(usecase.deleteTask).toHaveBeenCalledWith('1');
  });
});
