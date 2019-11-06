import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { default as reducer, featureName } from './index';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(featureName, reducer)],
})
export class CurrentUserStoreModule {}
