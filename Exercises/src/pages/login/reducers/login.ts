import {
  LoginEntity,
  LoginFormErrors,
  createEmptyLoginEntity,
  createEmptyLoginFormErrors
} from '../viewModel';
import { actionIds } from '../actions/actionIds';
export interface LoginState {
  loginEntity: LoginEntity;
  loginFormErrors: LoginFormErrors;
}

const loginStateFactory = (): LoginState => ({
  loginEntity: createEmptyLoginEntity(),
  loginFormErrors: createEmptyLoginFormErrors(),
});

export const loginReducer = (
  state: LoginState = loginStateFactory(),
  action
) => {
  switch (action.type) {
    case actionIds.UPDATE_LOGIN_ENTITY_FIELD:
      return handleUpdateLoginEntityField(state, action.payload);

    case actionIds.UPDATE_LOGIN_FORM_ERRORS:
      return handleUpdateloginFormErrors(state, action.payload);
  }
  return state;
};

const handleUpdateLoginEntityField = (
  state: LoginState,
  { fieldName, value, fieldValidationResult }
): LoginState => ({
  loginEntity: {
    ...state.loginEntity,
    [fieldName]: value,
  },
  loginFormErrors: {
    ...state.loginFormErrors,
    [fieldName]: fieldValidationResult,
  },
});

const handleUpdateloginFormErrors = (
  state: LoginState,
  { fieldErrors }
): LoginState => ({
  ...state,
  loginFormErrors: {
    ...state.loginFormErrors,
    ...fieldErrors,
  },
});
