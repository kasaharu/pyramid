import { Task } from '../../../domain/models';
import reducer, { Actions, initialState, State } from './index';

describe('TaskStore reducer spec', () => {
  it('save action', () => {
    const additionalTaskList: Task[] = [{ id: '1', title: 'test', isCompleted: false, orderId: 0 }];
    const saveAction = Actions.saveTaskList(additionalTaskList);
    const expected: State = { taskList: additionalTaskList };

    expect(reducer(initialState, saveAction)).toEqual(expected);
  });

  it('create action', () => {
    const additionalTask: Task = { id: '1', title: 'test', isCompleted: false, orderId: 0 };
    const createAction = Actions.createTask(additionalTask);
    const expected: State = { taskList: [additionalTask] };

    expect(reducer(initialState, createAction)).toEqual(expected);
  });

  it('updateTask action', () => {
    const taskList: Task[] = [
      { id: '1', title: 'test1', isCompleted: false, orderId: 0 },
      { id: '2', title: 'test2', isCompleted: false, orderId: 1 },
    ];
    const state: State = { taskList };
    const updatedTask: Task = { id: '1', title: 'test1', isCompleted: true, orderId: 0 };
    const updateAction = Actions.updateTask(updatedTask);
    const expected: State = {
      taskList: [{ id: '1', title: 'test1', isCompleted: true, orderId: 0 }, { id: '2', title: 'test2', isCompleted: false, orderId: 1 }],
    };

    expect(reducer(state, updateAction)).toEqual(expected);
  });

  it('deleteTask action', () => {
    const taskList: Task[] = [
      { id: '1', title: 'test1', isCompleted: false, orderId: 0 },
      { id: '2', title: 'test2', isCompleted: false, orderId: 1 },
    ];
    const state: State = { taskList };
    const deleteAction = Actions.deleteTask('1');
    const expected: State = { taskList: [{ id: '2', title: 'test2', isCompleted: false, orderId: 1 }] };

    expect(reducer(state, deleteAction)).toEqual(expected);
  });
});
