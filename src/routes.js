import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Layout from './layout';

// views
import HomePage from './views/HomePage';
import Posts from './views/Posts';
import Authors from './views/Authors';

const Routes = () => (
  <Router>
    <Switch>
      <Layout exact path="/" component={HomePage} title="Sapphire" />
      <Layout path="/posts" component={Posts} title="Posts" />
      <Layout path="/authors" component={Authors} title="Authors" />
    </Switch>
  </Router>
);

export default Routes;
