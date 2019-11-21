import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 0, 0),
  },
  appBar: {
    position: "sticky",
    flexWrap: 'wrap',

  },
  tabs: {
    width: '100%',
  },
  tab: {

  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} title="WSAJ">
      <Tabs className={classes.tabs}>
        <Tab className={classes.tab} label="Home" />
        <Tab className={classes.tab} label="DJ Shows" />
        <Tab className={classes.tab} label="Calendar" />
        <Tab className={classes.tab} label="Contact" />
        </Tabs>
    </AppBar>
  );
}