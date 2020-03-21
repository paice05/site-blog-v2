import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';

// core
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

// icons
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

// ducks
import { actionsMe } from '../../store/ducks/me';

// components
import Input from '../../components/Input/Input';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const UserData = ({ handleSubmit, initialize }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.me);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const { name, bio, username } = user;
    initialize({
      name,
      bio,
      username,
    });
  }, [user, initialize]);

  const handleSave = (values) => {
    dispatch(actionsMe.update(values));
    setDisabled(!disabled);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid
          style={{
            padding: '0',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
          item
          sm={12}
          md={3}
          lg={3}
        >
          <Avatar
            alt={user.name}
            src={user.file && user.file.url}
            className={classes.large}
          />
        </Grid>
        <Grid
          style={{ padding: '0', width: '100%' }}
          item
          sm={12}
          md={9}
          lg={9}
        >
          <Form onSubmit={handleSubmit((values) => handleSave(values))}>
            {disabled ? (
              <Fab
                onClick={() => setDisabled(!disabled)}
                color="secondary"
                aria-label="edit"
                style={{ float: 'right' }}
              >
                <EditIcon />
              </Fab>
            ) : (
              <Fab
                onClick={() => setDisabled(!disabled)}
                color="primary"
                aria-label="edit"
                style={{ float: 'right' }}
              >
                <ArrowBackIos />
              </Fab>
            )}
            <Field
              name="name"
              component={Input}
              label="Name"
              disabled={disabled}
            />
            <Field
              name="bio"
              component={Input}
              label="Bio"
              disabled={disabled}
            />
            <Field
              name="username"
              component={Input}
              label="Username"
              disabled={disabled}
            />
            {!disabled && (
              <Button
                style={{ float: 'right', marginTop: '7px' }}
                variant="contained"
                color="primary"
                type="submit"
              >
                {' '}
                Save
                {' '}
              </Button>
            )}
          </Form>
        </Grid>
      </Grid>
    </>
  );
};

UserData.propTypes = {
  // func
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'user',
})(UserData);
