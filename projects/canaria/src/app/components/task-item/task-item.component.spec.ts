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
    component.task = { id: 1, title: 'test', isCompleted: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
