import { TestBed } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { skip } from 'rxjs/operators';
import { CurrentUserStoreActions } from '../store/current-user-store';
import { AppInitializationUsecase } from './app-initialization.usecase';

describe('AppInitializationUsecase', () => {
  let service: AppInitializationUsecase;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: {} })],
    });

    service = TestBed.get(AppInitializationUsecase);
    store$ = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('call saveUserInfo()', () => {
    it('loggedInUser が null の場合', async () => {
      const user = null;
      const expected: Action[] = [];
      const actions: Action[] = [];

      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));

      await service.saveUserInfo(user);
      expect(actions).toEqual(expected);
    });

    it('call saveUserInfo()', async () => {
      const uid = 'uid';
      const user = {} as firebase.User;
      user.uid = uid;
      const saveCurrentUserAction = CurrentUserStoreActions.saveCurrentUser({ uid });
      const expected = [saveCurrentUserAction];
      const actions: Action[] = [];

      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));

      await service.saveUserInfo(user);
      expect(actions).toEqual(expected);
    });
  });
});
