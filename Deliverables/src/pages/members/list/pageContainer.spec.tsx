import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { MemberListPageContainer } from './index';
import configureStore from 'redux-mock-store';
import { State } from '../../reducers';
import * as fetchActions from './actions/fetchMembers';

const getMockStore = configureStore();

describe('pages/members/list/pageContainer', () => {
  let state;
  beforeAll(() => {
    state = {
      members: [],
    } as State;
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render as expected when state member is empty', () => {
    const store = getMockStore(state);

    const component = shallow(<MemberListPageContainer />, {
      context: { store },
    });
    expect(component).toMatchSnapshot();
  });

  it('should provide the member list to the page when members exist', () => {
    state.members = [
      {
        id: 1,
        name: 'name',
        avatarUrl: 'avatar',
      },
    ];
    const store = getMockStore(state);
    //const stub = jest.spyOn(fetchActions, 'fetchMembers').mockReturnValue(members);

    const component = shallow(<MemberListPageContainer />, {
      context: { store },
    });
    expect(component).toMatchSnapshot();
  });

  it('should call the fech when page is mounted', async () => {
    const members = [
      {
        id: 1,
        name: 'name',
        avatarUrl: 'avatar',
      },
    ];
    state.members = members;
    const store = getMockStore(state);
    const stub = jest.spyOn(fetchActions, 'fetchMembers').mockReturnValue({
      type: 'test action type',
    });

    const component = mount(<MemberListPageContainer />, {
      context: { store },
    });

    await expect(stub).toHaveBeenCalled();
  });
});
