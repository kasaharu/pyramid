import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from '../../../../domain/models';
import { TaskListUsecase } from '../../applications/task-list.usecase';
import { TasksComponent } from './tasks.component';

class MockTaskListUsecase {
  createTask() {}
}

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let usecase: TaskListUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasksComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: TaskListUsecase, useClass: MockTaskListUsecase }],
    }).compileComponents();

    usecase = TestBed.get(TaskListUsecase);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call createTask()', () => {
    spyOn(usecase, 'createTask');
    const task: Task = { id: '', title: 'test', isCompleted: false, orderId: 0 };
    component.createTask(task);

    expect(usecase.createTask).toHaveBeenCalledWith(task);
  });
});
