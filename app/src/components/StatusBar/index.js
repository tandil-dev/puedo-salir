import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Fab } from '@material-ui/core';

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
    bottom: theme.spacing(1),
    right: theme.spacing(3),
  },
}));

function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (
    error instanceof UserRejectedRequestErrorInjected
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}

const StatusBar = (props) => {
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
        <Toolbar>
          {error && <Typography variant="h6">{getErrorMessage(error)}</Typography>}
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Typography variant="h6">
            Chain id: {chainId}
          </Typography>
          <Typography variant="h6">
            Account: {account && `${account.slice(0,6)}...${account.slice(-4)}`}
          </Typography>
          <MetamaskGateway>
            { 
              active 
              ? <Fab variant="extended" color="secondary" aria-label="logout" className={classes.fab} onClick={handleLogout}>Logout</Fab>
              : <Fab variant="extended" color="secondary" aria-label="login" className={classes.fab} onClick={handleLogin}>Login</Fab>
          }
          </MetamaskGateway>
      </AppBar>

    </>
  );
}


export default StatusBar;



