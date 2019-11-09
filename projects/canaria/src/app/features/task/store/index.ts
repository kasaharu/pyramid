import { createAction, createReducer, on, union } from '@ngrx/store';
import produce from 'immer';
import { Task } from '../../../domain/models';
import { createFeatureStoreSelector } from '../../../store/helpers/selector-helper';

// NOTE: State
export interface State {
  taskList: Task[];
}

export const initialState: State = {
  taskList: [],
};

// NOTE: Actions
const saveTaskList = createAction('[Task] save', (payload: Task[]) => ({ payload }));
const createTask = createAction('[Task] create', (payload: Task) => ({ payload }));
const updateTask = createAction('[Task] update', (payload: Task) => ({ payload }));
const deleteTask = createAction('[Task] delete', (payload: string) => ({ payload }));

export const Actions = { saveTaskList, createTask, updateTask, deleteTask };
const ActionsUnion = union(Actions);

// NOTE: Reducer
const taskReducer = createReducer(
  initialState,
  on(saveTaskList, (state, action) => ({ ...state, taskList: action.payload })),
  on(createTask, (state, action) => ({ ...state, taskList: [...state.taskList, action.payload] })),
  on(updateTask, (state, action) => {
    return produce(state, (draft) => {
      const targetId = draft.taskList.findIndex((task) => task.id === action.payload.id);
      draft.taskList[targetId] = action.payload;
    });
  }),
  on(deleteTask, (state, action) => ({ ...state, taskList: state.taskList.filter((task) => task.id !== action.payload) })),
);

export default function reducer(state: State, action: typeof ActionsUnion): State {
  return taskReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'task';
export const selectStateFromTaskStore = createFeatureStoreSelector<State>(featureName);
