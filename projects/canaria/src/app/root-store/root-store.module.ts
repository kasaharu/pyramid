import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TodoStoreModule } from './todo-store/todo-store.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({}), TodoStoreModule],
})
export class RootStoreModule {}
