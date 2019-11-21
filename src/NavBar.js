import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar title="WSAJ">
        <Tab label="Home" />
        <Tab label="DJ Shows" />
        <Tab label="Calendar" />
        <Tab label="Contact" />
    </AppBar>
  );
}