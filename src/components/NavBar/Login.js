import React, { useState } from "react";

// core
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Login = ({ login }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

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
        <DialogTitle id="form-dialog-title">Remake Blog - Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bem vindo a plataforma de blog da Remake.
            Acesso agora e fique por dentro de todas as novidades do
            mundo da tecnologia com as notícias mais atuais do momento.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Username"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              login();
            }}
            color="primary"
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Login;
