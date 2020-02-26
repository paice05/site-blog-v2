import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Layout from './layout';

// views
import HomePage from './views/HomePage';
import Posts from './views/Posts';
import Authors from './views/Authors';
import Profile from './views/Profile';

const Routes = () => (
  <Router>
    <Switch>
      <Layout exact path="/" component={HomePage} title="Sapphire" />
      <Layout path="/posts" component={Posts} title="Posts" />
      <Layout path="/authors" component={Authors} title="Authors" />
      <Layout path="/profile" component={Profile} title="Profile" />
    </Switch>
  </Router>
);

export default Routes;
