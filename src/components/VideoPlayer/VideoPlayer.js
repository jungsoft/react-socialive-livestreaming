import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { Player } from 'video-react';
import useStyles from "./styles";

const DEFAULT_VIDEO_URL = "https://sl-recording-clips.s3.amazonaws.com/317f64be5bee0e32_720p_27664976665131427.mp4";

function VideoPlayer () {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState(DEFAULT_VIDEO_URL);
  const [videoUrl, setVideoUrl] = useState(DEFAULT_VIDEO_URL);

  const handleLoadVideoFromUrl = () => {
    setVideoUrl(inputValue);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Player>
          <source src={videoUrl} />
        </Player>
      </Grid>

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
