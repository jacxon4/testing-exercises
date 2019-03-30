import * as React from 'react';
import { shallow } from 'enzyme';
import { FormProps } from './formProps';
import { createEmptyLoginFormErrors } from '../viewModel';
import { Form } from './form';

describe('pages/login/components/form', () => {
  it('should render properties provided', () => {
    const props: FormProps = {
      doLogin: () => {},
      loginEntity: {
        login: 'LoginEntityLogin',
        password: 'LoginEntityPassword',
      },
      loginFormErrors: createEmptyLoginFormErrors(),
      updateField: () => {},
    };

    const component = shallow(<Form {...props} />);

    expect(component).toMatchSnapshot();
  });
});
