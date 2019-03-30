import * as React from 'react';
import { Member } from '../viewModel';
import { Row } from './row';

export interface BodyProps {
  members: Member[];
}

export const Body: React.StatelessComponent<BodyProps> = (props) => (
  <tbody>
    {
      props.members.map((member) => (
        <Row
          key={member.id}
          member={member}
        />
      ))
    }
  </tbody>
);
