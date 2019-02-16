import { connect } from "react-redux";
import { LoginPage } from "./page";
import { State } from "../reducers";
import { updateLoginEntityField } from "./actions/updateLoginEntityField";
import { loginRequest } from "./actions/loginRequest";

const mapStateToProps = (state: State) => ({
  loginEntity: state.login.loginEntity,
  loginFormErrors: state.login.loginFormErrors
});

const mapDispatchToProps = dispatch => ({
  updateField: loginEntity => (fieldName, value) =>
    dispatch(updateLoginEntityField(loginEntity, fieldName, value)),
  doLogin: loginEntity => () => dispatch(loginRequest(loginEntity))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  updateField: dispatchProps.updateField(stateProps.loginEntity),
  doLogin: dispatchProps.doLogin(stateProps.loginEntity)
});

export const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LoginPage);
