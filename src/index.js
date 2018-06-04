import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'unstated';
import App from './components/App';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootEl,
);
