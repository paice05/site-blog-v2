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
import { actionsAuth } from '../../store/ducks/auth';

// component
import Input from '../Input/Input';

const Login = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSave = ({ username, password }) => {
    dispatch(actionsAuth.auth(username, password));

    // handleClose();
  };

  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={false}
        fullWidth
      >
        <Form onSubmit={handleSubmit((values) => handleSave(values))}>
          <DialogTitle id="form-dialog-title">Remake Blog - Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Bem vindo a plataforma de blog da Remake.
            Acesso agora e fique por dentro de todas as novidades do
            mundo da tecnologia com as notícias mais atuais do momento.
            </DialogContentText>
            <Field name="username" component={Input} label="Username" type="text" />
            <Field name="password" component={Input} label="Password" type="password" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
            Cancel
            </Button>
            <Button
              type="submit"
              color="primary"
            >
            Login
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </>
  );
};

Login.propTypes = {
  // func
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'auth',
})(Login);
