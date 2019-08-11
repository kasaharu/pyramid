import { Task } from '../../domain/models';
import * as Actions from './actions';
import { reducer } from './reducer';
import { initialState, State } from './state';

describe('TaskStore reducer spec', () => {
  it('save action', () => {
    const additionalTaskList: Task[] = [{ id: '1', title: 'test', isCompleted: false }];
    const saveAction = Actions.save(additionalTaskList);
    const expected: State = { taskList: additionalTaskList };

    expect(reducer(initialState, saveAction)).toEqual(expected);
  });

  it('create action', () => {
    const additionalTask: Task = { id: '1', title: 'test', isCompleted: false };
    const createAction = Actions.create(additionalTask);
    const expected: State = { taskList: [additionalTask] };

    expect(reducer(initialState, createAction)).toEqual(expected);
  });

  it('deleteTask action', () => {
    const taskList: Task[] = [{ id: '1', title: 'test1', isCompleted: false }, { id: '2', title: 'test2', isCompleted: false }];
    const state: State = { taskList };
    const deleteAction = Actions.deleteTask('1');
    const expected: State = { taskList: [{ id: '2', title: 'test2', isCompleted: false }] };

    expect(reducer(state, deleteAction)).toEqual(expected);
  });
});
