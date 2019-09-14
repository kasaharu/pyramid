import { createFeatureSelector, createSelector } from '@ngrx/store';

export function createFeatureStoreSelector<T>(featureName: string) {
  return <S>(mappingFunction: (state: T, props?: any) => S) => {
    return createSelector(
      createFeatureSelector<T>(featureName),
      mappingFunction,
    );
  };
}
