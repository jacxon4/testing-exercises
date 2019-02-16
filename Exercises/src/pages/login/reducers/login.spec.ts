import { loginReducer, LoginState } from "./login";
import {
  createEmptyLoginEntity,
  createEmptyLoginFormErrors
} from "../viewModel";
import { actionIds } from "../actions/actionIds";
import { FieldValidationResult } from "lc-form-validation";
import deepFreeze from "deep-freeze";

describe("pages/login/reducers/loginReducers", () => {
  it("should return initial state when passing state equals to undefined", () => {
    const state = undefined;
    const action = { type: "unknown" };

    const result = loginReducer(state, action);

    expect(result).toEqual({
      loginEntity: createEmptyLoginEntity(),
      loginFormErrors: createEmptyLoginFormErrors()
    } as LoginState);
  });

  it("should return same state when passing unknown action", () => {
    const state: LoginState = {
      loginEntity: {
        login: "login",
        password: "password"
      },
      loginFormErrors: createEmptyLoginFormErrors()
    };
    const action = { type: "unknown" };

    const result = loginReducer(state, action);

    expect(result).toEqual(state);
  });

  it("should update loginEntity field when action is UPDATE_LOGIN_ENTITY_FIELD", () => {
    const state: LoginState = {
      loginEntity: {
        login: "login",
        password: "password"
      },
      loginFormErrors: createEmptyLoginFormErrors()
    };
    deepFreeze(state);

    const action = {
      type: actionIds.UPDATE_LOGIN_ENTITY_FIELD,
      payload: {
        fieldName: "login",
        value: "value",
        fieldValidationResult: {
          succeded: true
        }
      }
    };
    deepFreeze(action);

    const result = loginReducer(state, action);

    expect(result).toEqual({
      loginEntity: {
        login: "value",
        password: "password"
      },
      loginFormErrors: {
        login: {
          succeded: true
        },
        password: new FieldValidationResult()
      }
    });
  });
});
