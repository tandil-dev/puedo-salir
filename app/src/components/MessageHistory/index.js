import React from "react";
import { observe } from "@embarklabs/subspace-react";
import { Typography, Box, List, ListItem } from "@material-ui/core";
import ReactPlayer from 'react-player';

const MessageHistory = ({messages}) => {
  if (!messages) return null;
  return (
    <List>
      {
        messages.map(({ message, blockNumber }) => (
          <ListItem key={message + blockNumber}>
            <Typography>
              { 
                ReactPlayer.canPlay(message) && <ReactPlayer url={message} playing loop/>
              }
              <Box fontWeight="fontWeightBold">{message}</Box>
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