import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledNavbar = () => {
  const classes = useStyles();  


  return (
    <div className={classes.root}>
      <AppBar position="static">
      </AppBar>
  </div>
  );
}

export default StyledNavbar;