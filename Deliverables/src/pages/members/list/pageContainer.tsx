import * as React from 'react';
import { MemberListPage } from './page';
import { Member } from './viewModel';
import { fetchMembers } from './actions/fetchMembers';
import { mapMemberListModelToVM } from './mappers';
import { State } from '../../reducers';
import { connect } from 'react-redux';

export interface MemberPageContainerProps {
  members: Member[];
  fetchMembers: () => void;
}

const mapStateToProps = (state: State) => ({
  members: mapMemberListModelToVM(state.members),
});

const mapDispatchToProps = dispatch => ({
  fetchMembers: () => dispatch(fetchMembers()),
});

class PageContainer extends React.PureComponent<MemberPageContainerProps, {}> {
  componentDidMount() {
    this.props.fetchMembers();
  }

  render() {
    return <MemberListPage members={this.props.members} />;
  }
}

export const MemberListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
