import { combineReducers } from 'redux';
import { LoginState, loginReducer } from './login/reducers';
import { MembersState, membersReducer } from './members/list';
export interface State {
  login: LoginState;
  members: MembersState;
}

export const reducers = combineReducers<State>({
  login: loginReducer,
  members: membersReducer,
});
