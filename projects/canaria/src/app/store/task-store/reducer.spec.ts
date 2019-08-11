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
});
