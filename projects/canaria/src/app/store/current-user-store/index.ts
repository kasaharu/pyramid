import { CurrentUser } from '../../domain/models';

// NOTE: State
export interface State {
  currentUser: CurrentUser | null;
}

export const initialState: State = {
  currentUser: null,
};
