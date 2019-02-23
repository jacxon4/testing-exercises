import { combineReducers } from 'redux';
import {LoginState,loginReducer} from './login/reducers';
export interface State {
    login: LoginState;
}

export const reducers = combineReducers<State>({
    login: loginReducer,
});
