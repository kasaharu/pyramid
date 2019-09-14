import { createAction, union } from '@ngrx/store';
import { CurrentUser } from '../../domain/models';

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
