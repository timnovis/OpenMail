import React from 'react';
import styled from 'styled-components';
import variables from '../helpers/styleVariables';

const PageTitle = props => {
  return <Header>{props.children}</Header>;
};

const Header = styled.h1`
  color: ${variables.body};
  margin-top: 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${variables.grey};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default PageTitle;
