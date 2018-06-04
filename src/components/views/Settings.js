import React from 'react';
import { toast } from 'react-toastify';
import Layout from './Layout';
import PageTitle from '../PageTitle';
import Button from '../Button';
import Action from '../Action';
import Panel from '../Panel';
import { Table } from '../Tables';
import { InputWrapper, InputLabel, Input, ModalWrapper } from '../Forms';
import http from '../../helpers/http';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      fromName: '',
      fromEmail: '',
      newUserModalOpen: false,
      newUserEmail: '',
      newUserPassword: '',
    };
  }
  componentWillMount = async () => {
    this.updateUsers();
  };
  toggleModal = e => {
    e ? e.preventDefault() : null;
    this.setState({
      newUserModalOpen: !this.state.newUserModalOpen,
    });
  };
  updateUsers = async () => {
    const userListRequest = await http.get('/users');
    const userList = await userListRequest.json();
    const configValsRequest = await http.get('/settings/config/fromName,fromEmail');
    const configVals = await configValsRequest.json();

    this.setState({
      users: userList.result,
      fromName: configVals.result[0],
      fromEmail: configVals.result[1],
    });
  };
  saveNewUser = async e => {
    e.preventDefault();
    const data = await http.post('/users', {
      emailAddress: this.state.newUserEmail,
      password: this.state.newUserPassword,
    });
    const result = await data.json();
    this.updateUsers();
    this.toggleModal();
    toast('User created successfully');
  };
  render() {
    return (
      <Layout>
        <PageTitle>
          Settings{' '}
          <Button button onClick={e => this.toggleModal(e)}>
            <i class="fas fa-fw fa-plus" />New User
          </Button>
        </PageTitle>
        <h2>Email Preferences</h2>
        <form action="">
          <InputWrapper>
            <InputLabel htmlFor="fromName">From Name (the name you want to appear in people's inboxes)</InputLabel>
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
        <ModalWrapper isOpen={this.state.newUserModalOpen} onRequestClose={this.toggleModal} ariaHideApp={false}>
          <h2>New User</h2>
          <form onSubmit={e => this.saveNewUser(e)}>
            <InputWrapper>
              <InputLabel htmlFor="emailAddress">Email Address</InputLabel>
              <Input
                type="email"
                id="emailAddress"
                placeholder="e.g. user@company.com"
                onChange={e => this.setState({ newUserEmail: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                type="password"
                id="password"
                placeholder="*************"
                onChange={e => this.setState({ newUserPassword: e.target.value })}
              />
            </InputWrapper>
            <Button type="submit" primary button>
              <i className="fas fa-fw fa-save" />Save
            </Button>
          </form>
        </ModalWrapper>
      </Layout>
    );
  }
}

export default Settings;
