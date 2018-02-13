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
      fromName: '',
      fromEmail: '',
    };
  }
  componentWillMount = async () => {
    const userListRequest = await http.get('/users');
    const userList = await userListRequest.json();
    const configValsRequest = await http.get(
      '/settings/config/fromName,fromEmail',
    );
    const configVals = await configValsRequest.json();

    this.setState({
      users: userList.result,
      fromName: configVals.result[0],
      fromEmail: configVals.result[1],
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
        <h2>Email Preferences</h2>
        <form action="">
          <InputWrapper>
            <InputLabel htmlFor="fromName">
              From Name (the name you want to appear in people's inboxes)
            </InputLabel>
            <Input
              type="text"
              id="fromName"
              value={this.state.fromName}
              onChange={e => this.setState({ fromName: e.target.value })}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="fromEmail">
              From Email (the email address you would like to send emails from)
            </InputLabel>
            <Input
              type="email"
              id="fromEmail"
              value={this.state.fromEmail}
              onChange={e => this.setState({ fromEmail: e.target.value })}
            />
          </InputWrapper>
          <Button button type="submit">
            <i class="fas fa-fw fa-save" />Update
          </Button>
        </form>
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
