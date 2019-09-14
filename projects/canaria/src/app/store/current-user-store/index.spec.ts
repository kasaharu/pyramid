import { CurrentUser } from '../../domain/models';
import reducer, { initialState, saveCurrentUser, State } from './index';

describe('CurrentUserStore reducer spec', () => {
  it('save action', () => {
    const currentUser: CurrentUser = { uid: '1' };
    const saveAction = saveCurrentUser(currentUser);
    const expected: State = { currentUser };

    expect(reducer(initialState, saveAction)).toEqual(expected);
  });
});
