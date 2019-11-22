import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 0, 0),
  },
  appBar: {
    position: "sticky",
    flexWrap: 'wrap',

  },
  tabs: {
  },
  tab: {
    width: '100%',

  },
  loginTab: {
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
        <Tab className={classes.loginTab} icon={<AccountCircle />}  />
        </Tabs>
    </AppBar>
  );
}