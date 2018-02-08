import React from 'react';
import Layout from '../Layout';
import PageTitle from '../../PageTitle';
import Button from '../../Button';
import { InputWrapper, InputLabel, Input, Select, Textarea } from '../../Forms';

class NewCampaign extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      htmlContent: '',
    };
  }
  render() {
    return (
      <Layout>
        <PageTitle>
          New Campaign{this.state.title ? `: ${this.state.title}` : null}{' '}
          <div>
            <Button button>
              <i class="fas fa-fw fa-save" /> Save Draft
            </Button>{' '}
            <Button button>
              <i class="fas fa-fw fa-share-square" /> Test Send
            </Button>
          </div>
        </PageTitle>
        <InputWrapper>
          <InputLabel htmlFor="title">Campaign Title</InputLabel>
          <Input
            type="text"
            id="title"
            placeholder="My Awesome Campaign ✨"
            onChange={e => this.setState({ title: e.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="list">Campaign List</InputLabel>
          <Select id="list">
            <option selected disabled>
              Choose a list
            </option>
            <option value="allusers">All Users</option>
            <option value="newusers">New Users</option>
            <option value="marketing">Marketing</option>
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
        <div dangerouslySetInnerHTML={{ __html: this.state.htmlContent }} />
        <Button primary button>
          <i className="fas fa-fw fa-paper-plane" /> Send Now
        </Button>
      </Layout>
    );
  }
}

export default NewCampaign;
