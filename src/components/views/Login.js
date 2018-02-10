import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Logo from '../Logo';
import variables from '../../helpers/styleVariables';
import { InputWrapper, InputLabel, Input } from '../Forms';
import Button from '../Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailAdress: '',
      password: '',
    };
  }
  login = async e => {
    e.preventDefault();
    const { emailAddress, password } = this.state;

    try {
      const loginRes = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          emailAddress: emailAddress,
          password: password,
        }),
      });

      const data = await loginRes.json();

      window.localStorage.setItem('jwt', data.token);

      setTimeout(() => {
        this.props.history.push('/');
      }, 500);
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    return (
      <PageWrapper>
        <Box>
          <Logo className="logo" />
          <FormWrapper>
            <form onSubmit={e => this.login(e)}>
              <InputWrapper>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  onChange={e =>
                    this.setState({ emailAddress: e.target.value })
                  }
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="*********"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </InputWrapper>
              <Button button primary>
                Sign In
              </Button>
            </form>
          </FormWrapper>
        </Box>
      </PageWrapper>
    );
  }
}

const PageWrapper = styled.div`
  position: absolute;
  background ${variables.primary};
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);

  .logo {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const FormWrapper = styled.div`
  width: 500px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: ${variables.radius};
  padding: 2rem;

  h2 {
    margin-top: 0;
  }
`;

export default withRouter(Login);
