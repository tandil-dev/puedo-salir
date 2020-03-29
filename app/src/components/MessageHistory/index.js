import React from "react";
import { observe } from "@embarklabs/subspace-react";
import { Typography, Box, List, ListItem } from "@material-ui/core";

const MessageHistory = ({messages}) => {
  if (!messages) return '';
  return (
    <List>
      {
        messages.map(({ message, blockNumber }) => (
          <ListItem key={message}>
            <Typography component="div">
              <Box fontWeight="fontWeightBold">{message} </Box>
              <Box display="inline"> at block </Box>
              <Box fontWeight="fontWeightMedium" display="inline"> {blockNumber}</Box>
            </Typography>
          </ListItem>
        ))
      }
    </List>
  )
};

export default observe(MessageHistory);