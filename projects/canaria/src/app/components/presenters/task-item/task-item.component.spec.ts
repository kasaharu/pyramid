import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskItemComponent } from './task-item.component';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
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

  describe('call clickDeleteButton()', () => {
    it('confirm を OK した場合', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      spyOn(component.requestDeleteTask, 'emit');
      component.clickDeleteButton('1');
      expect(component.requestDeleteTask.emit).toHaveBeenCalledWith('1');
    });

    it('confirm をキャンセルした場合', () => {
      spyOn(window, 'confirm').and.returnValue(false);
      spyOn(component.requestDeleteTask, 'emit');
      component.clickDeleteButton('1');
      expect(component.requestDeleteTask.emit).not.toHaveBeenCalled();
    });
  });

  it('call check()', () => {
    spyOn(component.requestCheckTask, 'emit');
    component.check('1');
    expect(component.requestCheckTask.emit).toHaveBeenCalledWith('1');
  });
});
