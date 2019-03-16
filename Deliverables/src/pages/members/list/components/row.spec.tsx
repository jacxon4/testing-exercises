import * as React from 'react';
import { shallow } from 'enzyme';
import { Row, RowProps } from './row';

describe('pages/members/list/components/row', () => {
  it('should create a tr with given props', () => {
    const props: RowProps = {
      member: { avatarUrl: 'avatarURL1', name: 'name1', id: 1 },
    };

    const component = shallow(<Row {...props} />);

    expect(component).toMatchSnapshot();
  });
});
