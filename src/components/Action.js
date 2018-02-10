import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import variables from '../helpers/styleVariables';

class Action extends React.Component {
  render() {
    return <ActionButton {...this.props}>{this.props.children}</ActionButton>;
  }
}

const ActionButton = styled.button`
  padding: 0;
  border-radius: ${variables.radius};
  font-size: 0.9rem;
  color: ${variables.blue};
  cursor: pointer;
  margin-right: 0.8rem;

  svg {
    font-size: 0.8rem;
  }

  &:hover {
    color: ${darken(0.15, variables.blue)};
  }
`;

export default Action;
