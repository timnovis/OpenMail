import React from 'react';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import Layout from '../Layout';
import PageTitle from '../../PageTitle';
import Button from '../../Button';
import { InputWrapper, InputLabel, Input, Select, Textarea } from '../../Forms';
import http from '../../../helpers/http';

class NewCampaign extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      subject: '',
      htmlContent: '',
      listId: '',
    };
  }
  componentWillMount = async () => {
    const listsRequest = await http.get('/lists');
    const lists = await listsRequest.json();
    this.setState({
      lists: lists.result,
    });
  };
  saveCampaign = async e => {
    e.preventDefault();
    if (this.state.subject && this.state.htmlContent && this.state.listId) {
      const saveCampaignRequest = await http.post('/campaigns', {
        subject: this.state.subject,
        htmlContent: this.state.htmlContent,
        listId: this.state.listId,
      });
      const campaign = await saveCampaignRequest.json();
      this.props.history.push('/campaigns');
    }
  };
  render() {
    return (
      <Layout>
        <PageTitle>
          New Campaign
          <div>
            <Button button>
              <i className="fas fa-fw fa-save" /> Save Draft
            </Button>{' '}
            <Button button>
              <i className="fas fa-fw fa-share-square" /> Test Send
            </Button>
          </div>
        </PageTitle>
        <form onSubmit={e => this.saveCampaign(e)}>
          <InputWrapper>
            <InputLabel htmlFor="title">Campaign Title</InputLabel>
            <Input
              type="text"
              id="title"
              placeholder="My Awesome Campaign ✨"
              onChange={e => this.setState({ subject: e.target.value })}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="list">Campaign List</InputLabel>
            <Select
              id="list"
              onChange={e =>
                this.setState({
                  listId: e.target.value,
                })
              }
            >
              <option selected disabled>
                Choose a list
              </option>
              {this.state.lists.map(list => (
                <option value={list.id}>{list.listName}</option>
              ))}
            </Select>
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="content">Campaign Content</InputLabel>
            <Textarea
              id="content"
              placeholder="Paste your HTML content here"
              rows="5"
              onChange={e =>
                this.setState({
                  htmlContent: e.target.value,
                })
              }
            />
          </InputWrapper>
          <Button type="submit" primary button>
            <i className="fas fa-fw fa-paper-plane" /> Send Now
          </Button>
          <Button button>
            <i className="fas fa-fw fa-clock" /> Schedule
          </Button>
        </form>
      </Layout>
    );
  }
}

export default withRouter(NewCampaign);
