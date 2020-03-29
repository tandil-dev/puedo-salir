import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PuedoSalir from '../../components/PuedoSalir';

export default function Page({status = false}) {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <h3>¿Puedo salir?</h3> 
        </Grid>
        <Grid item>          
          <PuedoSalir />
        </Grid>
      </Grid>
    </Container>
  );
}