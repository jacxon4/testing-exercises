import { getLoginEntity, getLoginFormErrors } from './index';
import { State } from '../../reducers';
import {
  createEmptyLoginEntity,
  createEmptyLoginFormErrors,
} from '../viewModel';

describe('pages/login/selectors/login', () => {
  let state: State;
  beforeAll(() => {
    state = {
      login: {
        loginEntity: createEmptyLoginEntity(),
        loginFormErrors: createEmptyLoginFormErrors(),
      },
      members: [],
    };
  });
  it('should get LoginFormErrors from state', () => {
    expect(getLoginEntity(state)).toStrictEqual(state.login.loginEntity);
  });

  it('should get LoginEntity from state', () => {
    expect(getLoginFormErrors(state)).toStrictEqual(
      state.login.loginFormErrors
    );
  });
});
