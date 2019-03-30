import * as React from 'react';
import { Member } from '../viewModel';

export interface RowProps {
  member: Member;
}

export const Row: React.StatelessComponent<RowProps> = (props) => (
  <tr>
    <td>
      <img src={props.member.avatarUrl} style={{ maxWidth: '10rem' }} />
    </td>
    <td>
      <span>{props.member.id}</span>
    </td>
    <td>
      <span>{props.member.name}</span>
    </td>
  </tr>
);
