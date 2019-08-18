import { createAction, union } from '@ngrx/store';
import { Task } from '../../domain/models';

export const saveTaskList = createAction('[Task] save', (payload: Task[]) => ({ payload }));
export const createTask = createAction('[Task] create', (payload: Task) => ({ payload }));
export const updateTask = createAction('[Task] update', (payload: Task) => ({ payload }));
export const deleteTask = createAction('[Task] delete', (payload: string) => ({ payload }));

const actions = union({ saveTaskList, createTask, updateTask, deleteTask });
export type ActionsUnion = typeof actions;
