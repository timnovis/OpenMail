import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import variables from '../helpers/styleVariables';
import { darken } from 'polished';
import Routes from '../routes';
import ProtectedRoute from '../components/views/Protected';
import RedirectRoute from '../components/views/Redirect';

class App extends React.Component {
  render() {
    return (
      <Switch>
        {Routes.map(route => {
          if (route.protected) {
            return <ProtectedRoute key={route.name} {...route} />;
          } else if (route.forceRedirect) {
            return <RedirectRoute key={route.name} {...route} />;
          } else {
            return <Route key={route.name} {...route} />;
          }
        })}
      </Switch>
    );
  }
}

injectGlobal`
  ${styledNormalize}

  *, *:before, *:after {
    box-sizing: border-box;    
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  input, button, textarea, select {
    font-family: inherit;
    border: 0;
    background: transparent;

    &::placeholder {
      color: ${darken(0.4, variables.grey)};
    }
  }

  select {
    color: ${darken(0.4, variables.grey)};
  }
`;

export default App;
