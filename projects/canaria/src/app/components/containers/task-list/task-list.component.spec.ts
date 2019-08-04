import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormedTask } from '../../../domain/models';
import { TaskListUsecase } from '../../../usecases/task-list.usecase';
import { TaskListComponent } from './task-list.component';

class MockTaskListUsecase {
  addTask() {}
}

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let usecase: TaskListUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: TaskListUsecase, useClass: MockTaskListUsecase }],
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
    spyOn(usecase, 'addTask');
    const formedTask: FormedTask = { title: 'test', isCompleted: false };
    component.createTask(formedTask);

    expect(usecase.addTask).toHaveBeenCalledWith(formedTask);
  });
});
