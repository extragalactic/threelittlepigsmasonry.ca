/* eslint-disable */

// injectGlobal template is used since styled-components cannot normally style the body tag
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import history from './history';
import App from './App';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'),
);
