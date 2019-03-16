import * as React from 'react';
import { shallow } from 'enzyme';
import { MemberListPageContainer } from './pageContainer';
import * as fetchAPI from '../../../rest-api/api/member';

describe('pages/members/list/pageContainer', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should have no members provided to page when fetch throws error', async () => {
    const stub = jest.spyOn(fetchAPI, 'fetchMembers').mockRejectedValue(1);
    jest.spyOn(window, 'alert').mockImplementation((error) => {});
    const component = shallow(<MemberListPageContainer />);
    await expect(stub).rejects;
    expect(component.state('members')).toEqual([]);
  });
});
