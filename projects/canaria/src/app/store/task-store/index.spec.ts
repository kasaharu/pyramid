import { Task } from '../../domain/models';
import reducer, { createTask, deleteTask, initialState, saveTaskList, State, updateTask } from './index';

describe('TaskStore reducer spec', () => {
  it('save action', () => {
    const additionalTaskList: Task[] = [{ id: '1', title: 'test', isCompleted: false }];
    const saveAction = saveTaskList(additionalTaskList);
    const expected: State = { taskList: additionalTaskList };

    expect(reducer(initialState, saveAction)).toEqual(expected);
  });

  it('create action', () => {
    const additionalTask: Task = { id: '1', title: 'test', isCompleted: false };
    const createAction = createTask(additionalTask);
    const expected: State = { taskList: [additionalTask] };

    expect(reducer(initialState, createAction)).toEqual(expected);
  });

  it('updateTask action', () => {
    const taskList: Task[] = [{ id: '1', title: 'test1', isCompleted: false }, { id: '2', title: 'test2', isCompleted: false }];
    const state: State = { taskList };
    const updatedTask: Task = { id: '1', title: 'test1', isCompleted: true };
    const updateAction = updateTask(updatedTask);
    const expected: State = { taskList: [{ id: '1', title: 'test1', isCompleted: true }, { id: '2', title: 'test2', isCompleted: false }] };

    expect(reducer(state, updateAction)).toEqual(expected);
  });

  it('deleteTask action', () => {
    const taskList: Task[] = [{ id: '1', title: 'test1', isCompleted: false }, { id: '2', title: 'test2', isCompleted: false }];
    const state: State = { taskList };
    const deleteAction = deleteTask('1');
    const expected: State = { taskList: [{ id: '2', title: 'test2', isCompleted: false }] };

    expect(reducer(state, deleteAction)).toEqual(expected);
  });
});
