import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DJCard from './DJCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <DJCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <DJCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <DJCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <DJCard/>
        </Grid>
      </Grid>
    </div>
  );
}