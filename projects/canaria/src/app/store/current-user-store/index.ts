import { createAction, createReducer, on, union } from '@ngrx/store';
import { CurrentUser } from '../../domain/models';
import { createFeatureStoreSelector } from '../helpers/selector-helper';

// NOTE: State
export interface State {
  currentUser: CurrentUser | null;
}

export const initialState: State = {
  currentUser: null,
};

// NOTE: Actions
export const saveCurrentUser = createAction('[CurrentUser] save', (payload: CurrentUser) => ({ payload }));

const ActionsUnion = union({ saveCurrentUser });
export type ActionsUnionType = typeof ActionsUnion;

// NOTE: Reducer
const currentUserReducer = createReducer(initialState, on(saveCurrentUser, (state, action) => ({ ...state, currentUser: action.payload })));

export default function reducer(state: State, action: ActionsUnionType): State {
  return currentUserReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'currentUser';
export const selectStateFromCurrentUserStore = createFeatureStoreSelector<State>(featureName);
