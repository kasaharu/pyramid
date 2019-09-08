import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { Authenticator } from 'utilities';
import { AppComponent } from './app.component';
import { AppInitializationUsecase } from './usecases/app-initialization.usecase';

class MockAuthenticator {
  loggedInUser$ = new BehaviorSubject<firebase.User | null>(null);
}

class MockAppInitializationUsecase {
  saveUserInfo() {}
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let usecase: AppInitializationUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Authenticator, useClass: MockAuthenticator },
        { provide: AppInitializationUsecase, useClass: MockAppInitializationUsecase },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    usecase = TestBed.get(AppInitializationUsecase);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('call ngOnInit()', () => {
    spyOn(usecase, 'saveUserInfo');
    app.ngOnInit();

    expect(usecase.saveUserInfo).toHaveBeenCalled();
  });
});
