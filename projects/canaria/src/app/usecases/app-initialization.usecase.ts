import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveCurrentUser as CurrentUserStoreActionSaveCurrentUser } from '../store/current-user-store';

@Injectable({
  providedIn: 'root',
})
export class AppInitializationUsecase {
  constructor(private store$: Store<{}>) {}

  async saveUserInfo(loggedInUser: firebase.User | null) {
    if (!loggedInUser) {
      return;
    }
    this.store$.dispatch(CurrentUserStoreActionSaveCurrentUser({ uid: loggedInUser.uid }));
  }
}
