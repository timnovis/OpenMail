import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = props => {
  return (
    <LogoType {...props}>
      <Link to="/">
        <i className="fas fa-fw fa-envelope-open" />OpenMail
      </Link>
    </LogoType>
  );
};

const LogoType = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export default Logo;
