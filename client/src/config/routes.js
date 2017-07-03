import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import App from '../App';
import Home from '../Home/Home';
import Work from '../Work/Work';
import WorkPage from '../Work/WorkPage/WorkPage';
import Contact from '../Contact/Contact';
import About from '../About/About';

export default (
  <Route path="/" component={App}>
    <Route path="/work" component={Work} />
    <Route path="/work/:workName" component={WorkPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <IndexRoute component={Home} />
    <Redirect from="*" to="/" />
  </Route>
)
