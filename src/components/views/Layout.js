import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import variables from '../../helpers/styleVariables';
import Button from '../Button';
import Logo from '../Logo';

class Layout extends React.Component {
  render() {
    return (
      <Container>
        <ToastContainer />
        <Header>
          <Logo />
          <Button primary link to="/">
            <i className="fas fa-fw fa-sign-out-alt" />Sign Out
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
              <li>
                <NavLink to="/settings" activeClassName="active">
                  <i className="fas fa-fw fa-cog" />Settings
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

const Content = styled.main`
  background: #fff;
  padding: 1.5rem;
  flex: 1;
  overflow: scroll;
  max-height: calc(100vh - 70px);
`;

export default Layout;
