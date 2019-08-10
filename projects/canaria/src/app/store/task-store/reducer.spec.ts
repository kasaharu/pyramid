import { Task } from '../../domain/models';
import * as Actions from './actions';
import { reducer } from './reducer';
import { initialState, State } from './state';

describe('TaskStore reducer spec', () => {
  it('create action', () => {
    const additionalTask: Task = { id: 1, title: 'test', isCompleted: false };
    const createAction = Actions.create(additionalTask);
    const expected: State = { taskList: [additionalTask] };

    expect(reducer(initialState, createAction)).toEqual(expected);
  });
});
