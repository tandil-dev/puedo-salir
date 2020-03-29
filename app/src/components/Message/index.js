import React from "react";
import { observe } from "@embarklabs/subspace-react";
import { Typography } from "@material-ui/core";

const Message = ({ status }) => {
  return (
    <Typography>
      {status ? 'Yeii!' : 'No!'}
    </Typography>
  )
};

export default observe(Message);