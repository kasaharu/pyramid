import { createAction, union } from '@ngrx/store';
import { Task } from '../../domain/models';

export const saveTaskList = createAction('[Task] save', (payload: Task[]) => ({ payload }));
export const create = createAction('[Task] create', (payload: Task) => ({ payload }));
export const deleteTask = createAction('[Task] delete', (payload: string) => ({ payload }));

const actions = union({ saveTaskList, create, deleteTask });
export type ActionsUnion = typeof actions;
