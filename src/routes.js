import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// views
import HomePage from './views/HomePage';
import Posts from './views/Posts';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
