import { State } from '../../reducers';
import { createSelector } from 'reselect';

const getLogin = (state: State) => state.login;

export const getLoginFormErrors = createSelector(
  getLogin,
  login => login.loginFormErrors
);

export const getLoginEntity = createSelector(
  getLogin,
  login => login.loginEntity
);
