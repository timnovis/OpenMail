import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Subscribe } from 'unstated';
import Logo from '../Logo';
import variables from '../../helpers/styleVariables';
import { InputWrapper, InputLabel, Input } from '../Forms';
import Button from '../Button';
import UserStateContainer from '../../state/UserStateContainer';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailAdress: '',
      password: '',
    };
  }
  render() {
    return (
      <PageWrapper>
        <Box>
          <Logo className="logo" />
          <Subscribe to={[UserStateContainer]}>
            {UserState => (
              <FormWrapper>
                {UserState.state.error ? <ErrorMessage>{UserState.state.error}</ErrorMessage> : null}
                <form
                  onSubmit={e => UserState.login(e, this.props.history, this.state.emailAddress, this.state.password)}
                >
                  <InputWrapper>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input
                      type="email"
                      id="email"
                      placeholder="you@company.com"
                      onChange={e => this.setState({ emailAddress: e.target.value })}
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
                  <Button button primary disabled={UserState.state.isLoggingIn}>
                    {UserState.state.isLoggingIn ? (
                      <React.Fragment>
                        <i class="fas fa-spinner fa-spin" /> Signing In...
                      </React.Fragment>
                    ) : (
                      'Sign In'
                    )}
                  </Button>
                </form>
              </FormWrapper>
            )}
          </Subscribe>
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

const ErrorMessage = styled.div`
  background-color: ${variables.red};
  color: #fff;
  border-radius: ${variables.radius};
  padding: 1rem;
  margin-bottom: 1rem;
`;

export default withRouter(Login);
