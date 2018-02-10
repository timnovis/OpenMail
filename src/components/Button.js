import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import variables from '../helpers/styleVariables';

class Button extends React.Component {
  render() {
    if (this.props.button) {
      return (
        <ButtonWrapper {...this.props}>{this.props.children}</ButtonWrapper>
      );
    }

    if (this.props.link) {
      return <LinkWrapper {...this.props}>{this.props.children}</LinkWrapper>;
    }
  }
}

const styles = props => `
  margin-right: .5rem;
  font-size: 1rem;
  background: ${
    props.primary ? variables.secondary : props.danger ? variables.red : '#fff'
  };
  border: 0;
  padding: 0.6rem 1rem;
  border-radius: ${variables.radius};
  color: ${props.primary || props.danger ? '#fff' : variables.secondary};
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0,0,0,.08);
  transition: .2s ease all;
  text-decoration: none;

  svg {
    margin-right: .4rem;
    font-size: .9rem;
  }

  &:hover {
    transform: translate3d(0, -1px, 0);
    background: ${
      props.primary
        ? lighten(0.05, variables.secondary)
        : props.danger
          ? lighten(0.05, variables.red)
          : lighten(0.1, variables.grey)
    };
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const ButtonWrapper = styled.button`
  ${props => styles(props)};
`;

const LinkWrapper = styled(Link)`
  ${props => styles(props)};
`;

export default Button;
