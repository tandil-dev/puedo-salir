import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { SubspaceProvider } from "@embarklabs/subspace-react";

import Routes from './Routes';
import getLibrary from './web3/getLibrary';
import { web3 } from './web3';

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <SubspaceProvider web3={web3}>
        <Router>
          <Routes />
        </Router>
      </SubspaceProvider>
    </Web3ReactProvider>
  );
}

export default App;
