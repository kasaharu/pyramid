import { CurrentUser } from '../../domain/models';
import * as Actions from './actions';
import { reducer } from './reducer';
import { initialState, State } from './state';

describe('CurrentUserStore reducer spec', () => {
  it('save action', () => {
    const currentUser: CurrentUser = { uid: '1' };
    const saveAction = Actions.saveCurrentUser(currentUser);
    const expected: State = { currentUser };

    expect(reducer(initialState, saveAction)).toEqual(expected);
  });
});
