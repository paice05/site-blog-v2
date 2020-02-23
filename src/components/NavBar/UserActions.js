import React, { useRef, useState } from 'react';

// import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

// core
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

// icons
import { AccountCircle } from '@material-ui/icons';

import { actionsAuth } from '../../store/ducks/auth';

const UserActions = () => {
  const dispatch = useDispatch();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { user, token } = useSelector((state) => state.auth);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{
          color: 'white',
        }}
      >
        <Typography variant="inherit" style={{ marginRight: '15px' }}>{token && user.name}</Typography>
        <AccountCircle />
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                  <MenuItem
                    onClick={(event) => {
                      handleClose(event);
                      dispatch(actionsAuth.logout());
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

UserActions.propTypes = {};

export default UserActions;
