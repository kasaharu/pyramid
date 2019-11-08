import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { default as taskStoreReducer, featureName as taskStoreFeatureName } from '../features/tasks/task-store';
import { CurrentUserStoreModule } from './current-user-store/current-user-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
        },
      },
    ),
    StoreModule.forFeature(taskStoreFeatureName, taskStoreReducer),
    CurrentUserStoreModule,
  ],
})
export class RootStoreModule {}
