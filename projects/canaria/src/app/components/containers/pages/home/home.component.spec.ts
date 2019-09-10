import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginUsecase } from '../../../../usecases/login.usecase';
import { HomeComponent } from './home.component';

class MockLoginUsecase {
  logout() {}
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let loginUsecase: LoginUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: LoginUsecase, useClass: MockLoginUsecase }],
    }).compileComponents();

    loginUsecase = TestBed.get(LoginUsecase);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call logout() method', () => {
    spyOn(loginUsecase, 'logout');

    const app = fixture.debugElement.componentInstance;
    app.logout();
    expect(loginUsecase.logout).toHaveBeenCalled();
  });
});
