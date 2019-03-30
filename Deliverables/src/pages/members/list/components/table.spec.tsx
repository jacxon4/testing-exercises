import * as React from 'react';
import { shallow } from 'enzyme';
import { Table, TableProps } from './';
import { Row } from './row';
import { Header } from './header';
import { Body } from './body';

describe('pages/members/list/components/table', () => {
  it('should create a table and provide members to body', () => {
    const props: TableProps = {
      members: [
        { avatarUrl: 'avatarURL1', name: 'name1', id: 1 },
        { avatarUrl: 'avatarURL2', name: 'name2', id: 2 },
      ],
    };

    const component = shallow(<Table {...props} />);

    expect(component.find(Header)).not.toBeNull;
    expect(component.find(Body)).not.toBeNull;
    expect(component.find(Body).props().members).toEqual(props.members);
  });
});
