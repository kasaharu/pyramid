import { CurrentUser } from '../../domain/models';
import { selectCurrentUser } from './selectors';
import { State } from './state';

describe('CurrentUserStore selector spec', () => {
  it('selectCurrentUser', () => {
    const currentUser: CurrentUser = { uid: '1' };
    const state: State = { currentUser };
    expect(selectCurrentUser.projector(state)).toEqual(currentUser);
  });
});
