import deepFreeze from 'deep-freeze';
import { actionIds } from '../actions/actionIds';
import { membersReducer, MembersState } from './index';

describe('members/list/reducers/membersReducer', () => {
  it('should return initial state when no state available', () => {
    const state = undefined;
    const action = { type: 'test type' };
    const nextState = membersReducer(state, action);

    expect(nextState).toEqual([]);
  });

  it(`should updated state when actionIds.UPDATE_MEMBERS action`, () => {
    const state: MembersState = [
      { id: 1, login: 'Login', avatar_url: 'avatar 1' },
    ];

    const payload = [
      { id: 2, login: 'Login 2', avatar_url: 'avatar 2' },
      { id: 3, login: 'Login 3', avatar_url: 'avatar 3' },
    ];

    const action = {
      type: actionIds.UPDATE_MEMBERS,
      payload,
    };
    deepFreeze(state);

    const nextState = membersReducer(state, action);

    expect(nextState).toStrictEqual(payload);
  });

  it('should return same state when action is not recognized', () => {
    const state: MembersState = [
      { id: 1, login: 'Login', avatar_url: 'avatar' },
    ];
    const action = { type: 'some type' };
    deepFreeze(state);

    const nextState = membersReducer(state, action);

    expect(nextState).toStrictEqual(state);
  });
});
