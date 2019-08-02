import { Task } from '../../domain/models';

export interface State {
  taskList: Task[];
}

export const initialState: State = {
  taskList: [],
};
