import React from 'react';
import Layout from '../Layout';
import PageTitle from '../../PageTitle';
import Button from '../../Button';
import { Table } from '../../Tables';

class Campaigns extends React.Component {
  render() {
    return (
      <Layout>
        <PageTitle>
          Campaigns{' '}
          <Button primary link to="/campaigns/new">
            <i class="fas fa-fw fa-pencil-alt" />New Campaign
          </Button>
        </PageTitle>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>List</th>
              <th>Created at</th>
              <th>Open Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>My Campaign Title</td>
              <td>All Users</td>
              <td>7th Feb 2018</td>
              <td>45.23%</td>
              <td>Sent</td>
            </tr>
            <tr>
              <td>1</td>
              <td>My Campaign Title</td>
              <td>All Users</td>
              <td>7th Feb 2018</td>
              <td>45.23%</td>
              <td>Draft</td>
            </tr>
          </tbody>
        </Table>
      </Layout>
    );
  }
}

export default Campaigns;
