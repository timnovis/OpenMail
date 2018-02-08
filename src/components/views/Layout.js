import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { NavLink, Link } from 'react-router-dom';
import variables from '../../helpers/styleVariables';
import Button from '../Button';

class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo>
            <Link to="/">
              <i class="fas fa-fw fa-envelope-open" />OpenMail
            </Link>
          </Logo>
          <Button primary link to="/">
            <i class="fas fa-fw fa-sign-out-alt" />Sign Out
          </Button>
        </Header>
        <FlexRow>
          <Sidebar>
            <SidebarList>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  <i className="fas fa-fw fa-tachometer-alt" />Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/campaigns" activeClassName="active">
                  <i className="fas fa-fw fa-paper-plane" />Campaigns
                </NavLink>
              </li>
              <li>
                <NavLink to="/lists" activeClassName="active">
                  <i className="fas fa-fw fa-users" />Lists
                </NavLink>
              </li>
            </SidebarList>
          </Sidebar>
          <Content>{this.props.children}</Content>
        </FlexRow>
      </Container>
    );
  }
}

const FlexRow = styled.div`
  display: flex;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Sidebar = styled.aside`
  background: ${lighten(0.1, variables.primary)};
  max-width: 300px;
  flex: 1;
`;

const SidebarList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    border-bottom: 1px solid ${lighten(0.2, variables.primary)};
    a {
      color: #fff;
      text-decoration: none;
      padding: 1rem;
      display: block;

      &:hover {
        background: ${lighten(0.2, variables.primary)};
      }

      &.active {
        background: ${lighten(0.2, variables.primary)};
      }
    }

    svg {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;

const Header = styled.header`
  background: ${variables.primary};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
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

const Content = styled.main`
  background: #fff;
  padding: 1.5rem;
  flex: 1;
`;

export default Layout;
