import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../../components/Navbar';
import StatusBar from '../../components/StatusBar';

const MainTemplate = ({ children }) => (
  <>
    <CssBaseline />
    <NavBar />
    {children}
    <StatusBar />
  </>
);

export default MainTemplate;