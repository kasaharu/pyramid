import { createAction, union } from '@ngrx/store';
import { Task } from '../../domain/models';

export const save = createAction('[Task] save', (payload: Task) => ({ payload }));
const actions = union({ save });
export type ActionsUnion = typeof actions;
