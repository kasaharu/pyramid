import { createAction, union } from '@ngrx/store';
import { Task } from '../../domain/models';

export const create = createAction('[Task] create', (payload: Task) => ({ payload }));
const actions = union({ create });
export type ActionsUnion = typeof actions;
