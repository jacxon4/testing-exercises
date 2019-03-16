import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header';

// Useless test
describe('pages/members/list/components/header', () => {
  it('should be static', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
