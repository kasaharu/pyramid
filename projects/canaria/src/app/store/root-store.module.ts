import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CurrentUserStoreModule } from './current-user-store/current-user-store.module';
import { TaskStoreModule } from '../features/tasks/task-store/task-store.module';

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
    TaskStoreModule,
    CurrentUserStoreModule,
  ],
})
export class RootStoreModule {}
