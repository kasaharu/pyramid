import { createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { initialState, State } from './state';

const currentUserReducer = createReducer(
  initialState,
  on(Actions.saveCurrentUser, (state, action) => ({ ...state, currentUser: action.payload })),
);

export function reducer(state: State, action: Actions.ActionsUnion): State {
  return currentUserReducer(state, action);
}
