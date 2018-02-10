import React from 'react';
import Layout from '../Layout';
import PageTitle from '../../PageTitle';
import Button from '../../Button';
import { Table } from '../../Tables';
import Action from '../../Action';
import Pill from '../../Pill';
import http from '../../../helpers/http';

class Campaigns extends React.Component {
  constructor() {
    super();
    this.state = {
      campaigns: [],
    };
  }
  componentWillMount = async () => {
    this.updateCampaigns();
  };
  updateCampaigns = async () => {
    const campaignsRequest = await http.get('/campaigns');
    const campaigns = await campaignsRequest.json();
    this.setState({
      campaigns: campaigns.result,
    });
  };
  render() {
    return (
      <Layout>
        <PageTitle>
          Campaigns{' '}
          <Button primary link to="/campaigns/new">
            <i className="fas fa-fw fa-pencil-alt" />New Campaign
          </Button>
        </PageTitle>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>List</th>
              <th>Created at</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.campaigns.map(campaign => {
              return (
                <tr key={campaign.id}>
                  <td>{campaign.id}</td>
                  <td>{campaign.subject}</td>
                  <td>{campaign.listId}</td>
                  <td>{campaign.createdAt}</td>
                  <td>
                    <Pill color="green">Sent</Pill>
                  </td>
                  <td>
                    <Action>
                      <i className="fas fa-fw fa-chart-area" /> Stats
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

export default Campaigns;
