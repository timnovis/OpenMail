import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variables from '../../../helpers/styleVariables';
import Layout from '../Layout';
import PageTitle from '../../PageTitle';
import Button from '../../Button';
import Action from '../../Action';
import { Table } from '../../Tables';
import http from '../../../helpers/http';
import { ModalWrapper, InputWrapper, Input, InputLabel } from '../../Forms';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      importModal: false,
      list: [],
      listName: '',
      importFile: null,
      mimeType: null,
    };
  }
  componentWillMount = async () => {
    const listRequest = await http.get(`/lists/${this.props.match.params.id}`);
    const list = await listRequest.json();
    this.setState({
      list: list.result.subscribers.slice(0, 500),
      listName: list.result.listName,
    });
  };
  toggleImportModal = () => {
    this.setState({
      importModal: !this.state.importModal,
    });
  };
  importSubscribers = async e => {
    e.preventDefault();
    const r = await http.uploadFile(
      `/lists/import/${this.props.match.params.id}`,
      this.state.importFile,
    );
    await r.json();
  };
  handleInputChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      this.setState({
        importFile: e.target.files[0],
        mimeType: e.target.files[0].type,
      });
    }
  };
  render() {
    return (
      <Layout>
        <PageTitle>
          List: {this.state.listName}
          <div>
            <Button danger button onClick={e => this.toggleModal(e)}>
              <i className="fas fa-fw fa-trash" />Delete List
            </Button>
            <Button primary button onClick={e => this.toggleImportModal(e)}>
              <i className="fas fa-fw fa-upload" />Import Subscribers
            </Button>
          </div>
        </PageTitle>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email Address</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(member => {
              return (
                <tr>
                  <td>{member.id}</td>
                  <td>{member.emailAddress}</td>
                  <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <ModalWrapper
          isOpen={this.state.importModal}
          onRequestClose={this.toggleImportModal}
          ariaHideApp={false}
        >
          <h2>Import Subscribers</h2>
          <form onSubmit={e => this.importSubscribers(e)}>
            <InputWrapper>
              <InputLabel htmlFor="csvUpload">Subscriber CSV</InputLabel>
              <Input
                type="file"
                id="csvUpload"
                onChange={e => this.handleInputChange(e)}
              />
            </InputWrapper>
            <Button type="submit" primary button>
              <i className="fas fa-fw fa-upload" />Import Now
            </Button>
          </form>
        </ModalWrapper>
      </Layout>
    );
  }
}

export default List;
