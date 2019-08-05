import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/atoms/button/button.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FullereneComponent } from './fullerene.component';

@NgModule({
  declarations: [FullereneComponent, HeaderComponent, ButtonComponent],
  imports: [],
  exports: [FullereneComponent, HeaderComponent, ButtonComponent],
})
export class FullereneModule {}
