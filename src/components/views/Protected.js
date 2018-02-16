import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import http from '../../helpers/http';

class ProtectedRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      user: null,
    };
  }
  componentWillMount = async () => {
    try {
      this.setState({
        loading: true,
      });
      const validSession = await http.get('/auth/valid');
      const validSessionData = await validSession.json();
      if (validSession.status === 200) {
        this.setState({
          loading: false,
          user: validSessionData.result,
        });
      }
    } catch (e) {
      this.setState({
        loading: false,
        user: null,
      });
    }
  };
  render() {
    const { component: Component, ...restOfProps } = this.props;
    const { loading, user } = this.state;

    if (loading) {
      return 'Loading...';
    } else {
      return (
        <Route
          {...restOfProps}
          render={props =>
            user ? (
              <Component currentUser={user} {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      );
    }
  }
}

export default ProtectedRoute;
