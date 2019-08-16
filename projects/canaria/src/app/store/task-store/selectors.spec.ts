import { Task } from '../../domain/models';
import { selectTaskById, selectTaskList } from './selectors';
import { State } from './state';

describe('TaskStore selector spec', () => {
  it('selectTaskList', () => {
    const taskList: Task[] = [{ id: '1', title: '', isCompleted: false }];
    const state: State = { taskList };
    expect(selectTaskList.projector(state)).toEqual(taskList);
  });

  it('selectTaskById', () => {
    const taskList: Task[] = [{ id: '1', title: 'task1', isCompleted: false }, { id: '2', title: 'task2', isCompleted: false }];
    const taskId = '1';
    const state: State = { taskList };
    expect(selectTaskById.projector(state, { id: taskId })).toEqual({ id: '1', title: 'task1', isCompleted: false });
  });
});
