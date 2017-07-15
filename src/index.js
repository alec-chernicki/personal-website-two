import React from 'react';
import './index.css';
import { render } from 'react-snapshot';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker.register();

render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.getElementById('root')
);
