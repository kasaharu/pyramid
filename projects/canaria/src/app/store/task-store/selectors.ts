import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

export const featureName = 'task';
const selectFeatureState = createFeatureSelector<State>(featureName);

export const selectTaskList = createSelector(
  selectFeatureState,
  (state: State) => state.taskList,
);
