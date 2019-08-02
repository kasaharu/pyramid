import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { featureName } from './selectors';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(featureName, reducer)],
})
export class TaskStoreModule {}
