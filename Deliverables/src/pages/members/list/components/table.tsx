import * as React from 'react';
import { Member } from '../viewModel';
import { Header } from './header';
import { Body } from './body';

export interface TableProps {
  members: Member[];
}

export const Table: React.StatelessComponent<TableProps> = (props) => (
  <table className="table table-striped">
    <Header />
    <Body members={props.members} />
  </table>
);
