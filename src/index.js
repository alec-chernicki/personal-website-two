import React from 'react';
import './index.css';
import { render } from 'react-snapshot';

import {Router, browserHistory} from 'react-router';
import routes from './config/routes';

render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.getElementById('root')
);
