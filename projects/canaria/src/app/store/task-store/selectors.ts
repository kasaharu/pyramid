import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

export const featureName = 'task';
const selectFeatureState = createFeatureSelector<State>(featureName);

export const selectTaskList = createSelector(
  selectFeatureState,
  (state: State) => state.taskList,
);

export const selectTaskById = createSelector(
  selectFeatureState,
  (state: State, props: { id: string }) => state.taskList.find((task) => task.id === props.id),
);
