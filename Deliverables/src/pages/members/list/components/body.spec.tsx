import * as React from 'react';
import { shallow } from 'enzyme';
import { Body, BodyProps } from './body';
import { Row } from './row';

describe('pages/members/list/components/body', () => {
  it('should not create any Row if members is empty', () => {
    const props: BodyProps = {
      members: [],
    };

    const component = shallow(<Body {...props} />);

    expect(component.find(Row)).toBeNull;
  });

  it('should create as many Row components as members provided', () => {
    const props: BodyProps = {
      members: [
        { avatarUrl: 'avatarURL1', name: 'name1', id: 1 },
        { avatarUrl: 'avatarURL2', name: 'name2', id: 2 },
      ],
    };

    const component = shallow(<Body {...props} />);

    expect(component.find(Row).length).toEqual(2);
  });
});
