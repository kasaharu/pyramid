import { createAction, union } from '@ngrx/store';
import { Task } from '../../domain/models';

// NOTE: Actions
export const saveTaskList = createAction('[Task] save', (payload: Task[]) => ({ payload }));
export const createTask = createAction('[Task] create', (payload: Task) => ({ payload }));
export const updateTask = createAction('[Task] update', (payload: Task) => ({ payload }));
export const deleteTask = createAction('[Task] delete', (payload: string) => ({ payload }));

export const Actions = { saveTaskList, createTask, updateTask, deleteTask };
const ActionsUnion = union(Actions);
type ActionsUnionType = typeof ActionsUnion;
