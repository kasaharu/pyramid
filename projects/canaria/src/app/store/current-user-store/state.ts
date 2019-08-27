import { CurrentUser } from '../../domain/models';

export interface State {
  currentUser: CurrentUser | null;
}

export const initialState: State = {
  currentUser: null,
};
