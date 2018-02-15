import React from 'react';
import Layout from './Layout';
import PageTitle from '../PageTitle';
import http from '../../helpers/http';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      quotaMax: 0,
      quotaSent: 0,
      quotaPercentage: 0,
    };
  }
  componentWillMount = async () => {
    try {
      const quotaReq = await http.get('/settings/quota');
      const quota = await quotaReq.json();

      this.setState({
        quotaMax: quota.result.Max24HourSend,
        quotaSent: quota.result.SentLast24Hours,
        quotaPercentage: quota.result.SentLast24Hours / quota.result.Max24HourSend * 100,
      });
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    return (
      <Layout>
        <PageTitle>Dashboard</PageTitle>
        <div>
          <h3>24h Sending Quota</h3>
          <p>
            Sent {this.state.quotaSent} / {this.state.quotaMax}
          </p>
          <div style={{ height: '5px', backgroundColor: 'grey', position: 'relative' }}>
            <div
              style={{
                height: '5px',
                position: 'absolute',
                width: `${this.state.quotaPercentage}%`,
                backgroundColor: 'red',
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
