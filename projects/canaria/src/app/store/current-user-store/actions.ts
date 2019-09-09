import { createAction, union } from '@ngrx/store';
import { CurrentUser } from '../../domain/models';

export const saveCurrentUser = createAction('[CurrentUser] save', (payload: CurrentUser) => ({ payload }));

const actions = union({ saveCurrentUser });
export type ActionsUnion = typeof actions;
