import React from 'react';
import Layout from './Layout';
import PageTitle from '../PageTitle';
import Button from '../Button';
import Action from '../Action';
import Panel from '../Panel';
import { Table } from '../Tables';
import { InputWrapper, InputLabel, Input } from '../Forms';
import http from '../../helpers/http';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentWillMount = async () => {
    const userListRequest = await http.get('/users');
    const userList = await userListRequest.json();
    this.setState({
      users: userList.result,
    });
  };
  render() {
    return (
      <Layout>
        <PageTitle>
          Settings{' '}
          <Button button>
            <i class="fas fa-fw fa-plus" />New User
          </Button>
        </PageTitle>
        <h2>Users</h2>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email Address</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.emailAddress}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <Action>
                      <i className="fas fa-fw fa-edit" /> Edit
                    </Action>
                    <Action>
                      <i className="fas fa-fw fa-trash-alt" /> Delete
                    </Action>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Layout>
    );
  }
}

export default Settings;
