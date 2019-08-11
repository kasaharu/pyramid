import { Task } from '../../domain/models';
import { selectTaskList } from './selectors';
import { State } from './state';

describe('TaskStore selector spec', () => {
  it('selectTaskList', () => {
    const taskList: Task[] = [{ id: '1', title: '', isCompleted: false }];
    const state: State = { taskList };
    expect(selectTaskList.projector(state)).toEqual(taskList);
  });
});
