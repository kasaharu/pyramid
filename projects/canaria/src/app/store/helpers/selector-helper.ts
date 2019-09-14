import { createFeatureSelector, createSelector } from '@ngrx/store';

export function createFeatureStoreSelector(featureName: string) {
  return <T, S>(mappingFunction: (state: T, props?: any) => S) => {
    return createSelector(
      createFeatureSelector<T>(featureName),
      mappingFunction,
    );
  };
}
