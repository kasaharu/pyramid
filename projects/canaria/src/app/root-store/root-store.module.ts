import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoStoreModule } from './todo-store/todo-store.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TodoStoreModule],
})
export class RootStoreModule {}
