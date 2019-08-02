import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FullereneModule } from 'fullerene';
import { UtilitiesModule } from 'utilities';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/containers/pages/home/home.component';
import { LoginComponent } from './components/containers/pages/login/login.component';
import { TasksComponent } from './components/containers/pages/tasks/tasks.component';
import { TaskListComponent } from './components/containers/task-list/task-list.component';
import { TaskFormComponent } from './components/presenters/task-form/task-form.component';
import { TaskItemComponent } from './components/presenters/task-item/task-item.component';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, TasksComponent, TaskListComponent, TaskItemComponent, TaskFormComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    UtilitiesModule,
    FullereneModule,
    AppRoutingModule,
    RootStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
