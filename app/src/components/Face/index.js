import React from "react";
import { observe } from "@embarklabs/subspace-react";
import { Typography } from "@material-ui/core";
import {angryFaces, happyFaces} from './faces';

const Face = ({ isHappy }) => {
  const array = isHappy ? happyFaces: angryFaces;
  const randomFace = array[Math.floor(Math.random() * array.length)];
  return (
    <Typography>
      {randomFace}
    </Typography>
  );
};

export default observe(Face);