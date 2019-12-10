import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 0, 0),
  },
  appBar: {
    position: 'sticky',
    flexWrap: 'wrap',

  },
  tabs: {
  },
  tab: {
    width: '100%',

  },
  loginTab: {
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function AdminNavBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.appBar} title="WSAJ">
        <Tabs className={classes.tabs}>
          <Tab className={classes.tab} label="Account Requests" to='/admin/show-requests' component={Link} />
          <Tab className={classes.tab} label="Current Shows" to='/admin/current-shows' component={Link} />
          <Tab className={classes.tab} label="Calendar" to='/admin/schedule' component={Link} />
          <Tab className={classes.tab} label="Contact" to='/admin/contact' component={Link} />
          <Tab className={classes.loginTab} icon={<AccountCircle />} to='/login' component={Link} />
        </Tabs>
      </AppBar>
      </React.Fragment>

  );
}