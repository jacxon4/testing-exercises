import * as React from 'react';
const styles = require('./header.scss');

interface Props {
  title: string;
}

// Test to use identity-object-proxy to support node modules
export const Header = (props: Props) => (
  <div className={`card-header ${styles.header}`}>
    <h3 className="panel-title">{props.title}</h3>
  </div>
);
