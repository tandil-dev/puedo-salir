import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useWeb3React } from '@web3-react/core'

import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Form({ onSubmit }) {
  const classes = useStyles();
  const web3Context = useWeb3React();
  const { active } = web3Context;

  const { control, handleSubmit } = useForm();
  
  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller as={TextField} name="message" control={control} placeholder="#quedateencasa" disabled={!active}/>
        <Button type="submit" variant="contained" disabled={!active}>Send</Button>
      </form>
    </>
  );
}