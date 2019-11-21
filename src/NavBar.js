import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  appBar: {
    listStyleType: "none",

    backgroundColor: "#333",
    top: "0",
    width: "100%",
    display: "inline",

  },
  tab: {
    color: "#F7FAFF",
    textAlign: "center",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar} title="WSAJ">
        <Tab className={classes.tab} label="Home" />
        <Tab className={classes.tab} label="DJ Shows" />
        <Tab className={classes.tab} label="Calendar" />
        <Tab className={classes.tab} label="Contact" />
    </AppBar>
  );
}