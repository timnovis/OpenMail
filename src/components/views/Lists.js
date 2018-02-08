import React from 'react';
import Layout from './Layout';
import PageTitle from '../PageTitle';
import Button from '../Button';
import { Table } from '../Tables';

class Lists extends React.Component {
  render() {
    return (
      <Layout>
        <PageTitle>
          Lists{' '}
          <Button primary link to="/campaigns/new">
            <i class="fas fa-fw fa-upload" />Import List
          </Button>
        </PageTitle>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Members</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>All Users</td>
              <td>1,234</td>
              <td>Edit | Delete | Export</td>
            </tr>
          </tbody>
        </Table>
      </Layout>
    );
  }
}

export default Lists;
