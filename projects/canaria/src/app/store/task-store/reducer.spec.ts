import { Task } from '../../domain/models';
import * as Actions from './actions';
import { reducer } from './reducer';
import { initialState, State } from './state';

describe('TaskStore reducer spec', () => {
  it('save action', () => {
    const additionalTask: Task = { id: 1, title: 'test', isCompleted: false };
    const saveAction = Actions.save(additionalTask);
    const expected: State = { taskList: [additionalTask] };

    expect(reducer(initialState, saveAction)).toEqual(expected);
  });
});
