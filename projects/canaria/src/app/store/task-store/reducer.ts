import { createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { initialState, State } from './state';

const taskReducer = createReducer(initialState, on(Actions.save, (state, action) => ({ taskList: [...state.taskList, action.payload] })));

export function reducer(state: State, action: Actions.ActionsUnion): State {
  return taskReducer(state, action);
}
