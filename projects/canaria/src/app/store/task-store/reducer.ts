import { createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { initialState, State } from './state';

const taskReducer = createReducer(
  initialState,
  on(Actions.save, (state, action) => ({ ...state, taskList: action.payload })),
  on(Actions.create, (state, action) => ({ ...state, taskList: [...state.taskList, action.payload] })),
  on(Actions.deleteTask, (state, action) => ({ ...state, taskList: state.taskList.filter((task) => task.id !== action.payload) })),
);

export function reducer(state: State, action: Actions.ActionsUnion): State {
  return taskReducer(state, action);
}
