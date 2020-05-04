import React from 'react';

import Grid from '@material-ui/core/Grid';

import VideoPlayer from "../VideoPlayer/VideoPlayer";

import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <VideoPlayer />
      </Grid>
    </Grid>
  );
}

export default App;
