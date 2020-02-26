import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

// core
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// icons
import { Menu } from '@material-ui/icons';

// components
import SideList from './SideList';
import UserActions from './UserActions';
import Login from './Login';
import Register from './Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

const NavBar = ({ title }) => {
  const classes = useStyles();

  const { token } = useSelector((state) => state.auth);

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          className={classes.menuButton}
          aria-label="menu"
          onClick={toggleDrawer('left', true)}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {token ? (
          <UserActions />
        ) : (
          <>
            <Register />
            <Login />
          </>
        )}
      </Toolbar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        <SideList side="left" toggleDrawer={toggleDrawer} classes={classes} />
      </Drawer>
    </AppBar>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavBar;
