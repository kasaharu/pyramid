import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

export const featureName = 'currentUser';
const selectFeatureState = createFeatureSelector<State>(featureName);

export const selectCurrentUser = createSelector(
  selectFeatureState,
  (state: State) => state.currentUser,
);
