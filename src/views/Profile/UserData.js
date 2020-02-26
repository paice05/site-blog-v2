import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';

// core
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

// icons
import EditIcon from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';

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

  const { user } = useSelector((state) => state.auth);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const { name, bio, username } = user;
    initialize({
      name,
      bio,
      username,
    });
  }, [user, initialize]);

  const handleSave = (values) => console.log(values);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Avatar alt={user.name} src={user.file && user.file.url} className={classes.large} />
        </Grid>
        <Grid item xs={9}>
          <Form onSubmit={handleSubmit(((values) => handleSave(values)))}>
            {
              disabled && (
                <Fab onClick={() => setDisabled(!disabled)} color="secondary" aria-label="edit" style={{ float: 'right' }}>
                  <EditIcon />
                </Fab>
              )
            }
            {
            !disabled && (
              <Fab onClick={() => setDisabled(!disabled)} color="primary" aria-label="edit" style={{ float: 'right' }}>
                <Save />
              </Fab>
            )
            }
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
          </Form>
        </Grid>
      </Grid>
    </>
  );
};

export default reduxForm({
  form: 'user',
})(UserData);
