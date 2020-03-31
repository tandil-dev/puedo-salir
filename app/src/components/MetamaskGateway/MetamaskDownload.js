import React from "react";
import { Fab, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(1),
      right: theme.spacing(3),
    },
  }));

const MetamaskDownload = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab variant="extended" color="secondary" aria-label="Download Metamask"  className={classes.fab} onClick={handleClickOpen}>Login</Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Descargar Metamask</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta Aplicación requiere Metamask para funcionar correctamente. <br />
            Por favor instale Metamask y vuelva a intentarlo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="https://metamask.io/download.html" color="primary" autoFocus>
            Descargar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MetamaskDownload;