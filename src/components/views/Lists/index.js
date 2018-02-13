import React from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import variables from '../../../helpers/styleVariables';
import Layout from '../Layout';
import PageTitle from '../../PageTitle';
import Button from '../../Button';
import Action from '../../Action';
import { Table } from '../../Tables';
import { InputWrapper, InputLabel, Input, ModalWrapper } from '../../Forms';
import http from '../../../helpers/http';

class Lists extends React.Component {
  constructor() {
    super();
    this.state = {
      newListModalOpen: false,
      newListName: '',
      lists: [],
    };
  }
  componentWillMount = async () => {
    this.updateLists();
  };
  updateLists = async () => {
    const listsRequest = await http.get('/lists');
    const lists = await listsRequest.json();
    this.setState({
      lists: lists.result,
    });
  };
  toggleModal = e => {
    e ? e.preventDefault() : null;
    this.setState({
      newListModalOpen: !this.state.newListModalOpen,
      newListName: '',
    });
  };
  saveNewList = async e => {
    e.preventDefault();
    const data = await http.post('/lists', {
      listName: this.state.newListName,
    });
    const result = await data.json();
    this.updateLists();
    this.toggleModal();
    toast('List created successfully');
  };
  deleteList = async (e, id) => {
    e ? e.preventDefault() : null;
    let confirm = window.confirm('Are you sure you want to delete this list?');
    if (confirm) {
      const data = await http.delete(`/lists/${id}`);
      const result = await data.json();
      this.updateLists();
      console.log(result);
      toast('List deleted successfully');
    }
  };
  render() {
    return (
      <Layout>
        <PageTitle>
          Lists{' '}
          <Button primary button onClick={e => this.toggleModal(e)}>
            <i className="fas fa-fw fa-plus" />New List
          </Button>
        </PageTitle>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Members</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lists.map(list => {
              return (
                <tr>
                  <td>{list.id}</td>
                  <td>
                    <Link to={`/lists/${list.id}`}>{list.listName}</Link>
                  </td>
                  <td>{list.subscriberCount || 0}</td>
                  <td>
                    <Action>
                      <i className="fas fa-fw fa-edit" /> Edit
                    </Action>
                    <Action onClick={e => this.deleteList(e, list.id)}>
                      <i className="fas fa-fw fa-trash-alt" /> Delete
                    </Action>
                    <Action>
                      <i className="fas fa-fw fa-download" /> Export
                    </Action>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <ModalWrapper
          isOpen={this.state.newListModalOpen}
          onRequestClose={this.toggleModal}
          ariaHideApp={false}
        >
          <h2>New List</h2>
          <form onSubmit={e => this.saveNewList(e)}>
            <InputWrapper>
              <InputLabel htmlFor="listName">List Name</InputLabel>
              <Input
                type="text"
                id="listName"
                placeholder="e.g. Press Contacts"
                onChange={e => this.setState({ newListName: e.target.value })}
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

export default Lists;
