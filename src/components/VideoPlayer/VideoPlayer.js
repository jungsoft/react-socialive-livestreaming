import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import IframeResizer from 'iframe-resizer-react';

import useStyles from "./styles";

const DEFAULT_STREAM_URL = "https://sl-player-host.s3.amazonaws.com/client.html?player=3e794f71744bd1c7";

function VideoPlayer () {
  const classes = useStyles();

  const [videoStreamUrl, setVideoStreamUrl] = useState(DEFAULT_STREAM_URL);
  const [inputValue, setInputValue] = useState(DEFAULT_STREAM_URL);

  const handleLoadVideoFromUrl = () => {
    setVideoStreamUrl(inputValue);
  };

  return (
    <Grid container>
      {
        videoStreamUrl && (
          <Grid item xs={12}>
            <IframeResizer
              src={videoStreamUrl}
              className={classes.iFrame}
              heightCalculationMethod="taggedElement"
              title="Video player"
              scrolling="no"
              log
            />
          </Grid>
        )
      }

      <Grid item xs={12} className={classes.inputRow}>
        <TextField
          variant="filled"
          label="Video URL"
          value={inputValue}
          className={classes.input}
          onChange={({ target: { value } }) => setInputValue(value)}
        />

        <Button
          onClick={handleLoadVideoFromUrl}
          variant="contained"
          color="primary"
        >
          Load
        </Button>
      </Grid>
    </Grid>
  );
};

export default VideoPlayer;
