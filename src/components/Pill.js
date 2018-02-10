import React from 'react';
import styled from 'styled-components';
import variables from '../helpers/styleVariables';

const Pill = props => {
  return <PillWrapper color={props.color}>{props.children}</PillWrapper>;
};

const getPillColour = color => {
  switch (color) {
    case 'red':
      return variables.red;
    case 'green':
      return variables.green;
    case 'blue':
      return variables.blue;
    case 'orange':
      return variables.secondary;
    default:
      return variables.primary;
  }
};

const PillWrapper = styled.span`
  border-radius: ${variables.radius};
  color: #fff;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  margin-right: 0.8rem;

  background-color: ${props => getPillColour(props.color)};
`;

export default Pill;
