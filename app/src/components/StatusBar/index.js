/* eslint-disable eqeqeq */
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Fab } from '@material-ui/core';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import { injected } from '../../web3/connectors';

import MetamaskGateway from '../MetamaskGateway';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  typography1: {
    padding: theme.spacing(1,0,1,1),
  },
  typography2: {
    padding: theme.spacing(0,0,1,1),
  },
}));

function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No se detecta Metamask.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "Estás conectado a una red no compatible. Utilice Ropsten o Localhost con chain id 88"
  } else if (
    error instanceof UserRejectedRequestErrorInjected
  ) {
    return 'Por favor autorice este sitio para acceder a este Metamsk.'
  } else {
    console.error(error)
    return 'Un error inseperado sucedió. Revise la consola para más detalles.'
  }
}

const StatusBar = () => {
  const web3Context = useWeb3React();
  const { chainId, account, error, active, activate, deactivate } = web3Context;
  const classes = useStyles();

  function handleLogout() {
    deactivate(injected);
  };

  function handleLogin () {
    activate(injected);
  };

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        {error && <Typography variant="h6" color="error" fontWeight="fontWeightBold" className={classes.typography}>
          {getErrorMessage(error)}
        </Typography>}
        <Typography variant="h6" className={classes.typography1}>
          Chain id: {chainId}
        </Typography>
        <Typography variant="h6" className={classes.typography2}>
          Account: {account && `${account.slice(0,6)}...${account.slice(-4)}`}
        </Typography>
        <MetamaskGateway>
          { 
            active 
            ? <Fab variant="extended" aria-label="logout" className={classes.fab} onClick={handleLogout}>Logout</Fab>
            : <Fab variant="extended" aria-label="login" className={classes.fab} onClick={handleLogin}>Login</Fab>
        }
        </MetamaskGateway>
      </AppBar>
    </>
  );
}


export default StatusBar;



