import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FullereneComponent } from './fullerene.component';

@NgModule({
  declarations: [FullereneComponent, HeaderComponent],
  imports: [],
  exports: [FullereneComponent],
})
export class FullereneModule {}
