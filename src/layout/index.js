import React from 'react';

import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

// components
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Layout = ({
  path, component, title, ...rest
}) => (
  <div style={{
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  }}
  >
    <NavBar title={title} />
    <div style={{ flex: 1, marginTop: '60px' }}>
      <Route path={path} component={component} {...rest} />
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  // string
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // any
  component: PropTypes.any.isRequired,
};

export default Layout;
