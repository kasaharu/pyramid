import { createAction, union } from '@ngrx/store';
import { Task } from '../../domain/models';

export const save = createAction('[Task] save', (payload: Task[]) => ({ payload }));
export const create = createAction('[Task] create', (payload: Task) => ({ payload }));

const actions = union({ save, create });
export type ActionsUnion = typeof actions;
