import { createAction, createFeatureSelector, createReducer, createSelector, on, union } from '@ngrx/store';
import produce from 'immer';
import { Task } from '../../domain/models';

// NOTE: State
export interface State {
  taskList: Task[];
}

export const initialState: State = {
  taskList: [],
};

// NOTE: Actions
export const saveTaskList = createAction('[Task] save', (payload: Task[]) => ({ payload }));
export const createTask = createAction('[Task] create', (payload: Task) => ({ payload }));
export const updateTask = createAction('[Task] update', (payload: Task) => ({ payload }));
export const deleteTask = createAction('[Task] delete', (payload: string) => ({ payload }));

export const Actions = { saveTaskList, createTask, updateTask, deleteTask };
const ActionsUnion = union(Actions);
type ActionsUnionType = typeof ActionsUnion;

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

export default function reducer(state: State, action: ActionsUnionType): State {
  return taskReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'task';
export function createFeatureStoreSelector(name: string) {
  return <T, S>(mappingFunction: (state: T, props?: any) => S) => {
    return createSelector(
      createFeatureSelector<T>(name),
      mappingFunction,
    );
  };
}

export const selectTaskList = createFeatureStoreSelector(featureName)<State, Task[]>((state: State) => state.taskList);
export const selectTaskById = createFeatureStoreSelector(featureName)<State, Task | undefined>((state: State, props: { id: string }) => {
  return state.taskList.find((task) => task.id === props.id);
});
