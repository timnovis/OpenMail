import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import variables from '../helpers/styleVariables';

const Panel = props => {
  return <PanelWrapper>{props.children}</PanelWrapper>;
};

const PanelWrapper = styled.div`
  background-color: ${lighten(0.07, variables.grey)};
  border-radius: ${variables.radius};
  padding: 1rem;
`;

export default Panel;
