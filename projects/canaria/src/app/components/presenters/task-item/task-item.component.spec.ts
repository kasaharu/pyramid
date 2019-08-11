import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponent } from './task-item.component';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    component.task = { id: '1', title: 'test', isCompleted: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get taskStatusText', () => {
    it('task is completed', () => {
      const task = { ...component.task, isCompleted: true };
      component.task = task;
      expect(component.taskStatusText).toBe('完了');
    });

    it('task is NOT completed', () => {
      const task = { ...component.task, isCompleted: false };
      component.task = task;
      expect(component.taskStatusText).toBe('新規');
    });
  });
});
