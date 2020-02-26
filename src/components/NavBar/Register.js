import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { reduxForm, Form, Field } from 'redux-form';
import { useDispatch } from 'react-redux';

// core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// ducks
import { actionsAuthors } from '../../store/ducks/authors';

// component
import Input from '../Input/Input';

const Register = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = ({
    name, bio, username, password,
  }) => {
    dispatch(actionsAuthors.createAuthors({
      name, bio, username, password,
    }));
  };

  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={false}
        fullWidth
      >
        <Form onSubmit={handleSubmit((values) => handleSave(values))}>
          <DialogTitle id="form-dialog-title">Sapphire Blog - Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Bem vindo a plataforma de blog da Sapphire. Acesso agora e fique por
              dentro de todas as novidades do mundo da tecnologia com as
              notícias mais atuais do momento.
            </DialogContentText>
            <Field
              name="name"
              component={Input}
              label="Name"
              type="text"
            />
            <Field
              name="bio"
              component={Input}
              label="Bio"
              type="text"
            />
            <Field
              name="username"
              component={Input}
              label="Username"
              type="text"
            />
            <Field
              name="password"
              component={Input}
              label="password"
              type="password"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Register
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </>
  );
};

Register.propTypes = {
  // func
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'register',
})(Register);
