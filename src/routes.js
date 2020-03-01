import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Layout from './layout';

// views
import HomePage from './views/HomePage';
import Posts from './views/Posts';
import Authors from './views/Authors';
import Profile from './views/Profile';
import NewPost from './views/Posts/NewPost';

const Routes = () => (
  <Router>
    <Switch>
      <Layout exact path="/" component={HomePage} title="Sapphire" />
      <Layout path="/posts" component={Posts} title="Posts" />
      <Layout path="/newPosts" component={NewPost} title="New Post" />
      <Layout path="/authors" component={Authors} title="Authors" />
      <Layout path="/profile" component={Profile} title="Profile" />
    </Switch>
  </Router>
);

export default Routes;
