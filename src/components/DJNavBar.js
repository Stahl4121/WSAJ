import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ProfileTabMenu from './ProfileTabMenu';

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
    //width: '100%',

  },
  loginTab: {
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function DJNavBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.appBar} title="WSAJ">
        <Tabs className={classes.tabs}>
        <Tab className={classes.tab} label="Home" to='/' component={Link} />
          <Tab className={classes.tab} label="DJ Shows" to='/shows' component={Link} />
          <Tab className={classes.tab} label="Calendar" to='/schedule' component={Link} />
          <Tab className={classes.tab} label="Contact" to='/contact' component={Link} />
          <Tab className={classes.tab} label="Profile" to='/dj/profile' component={Link} />
          <Tab className={classes.tab} label="Add Set" to='/dj/add-set' component={Link} />
          <ProfileTabMenu classes = {classes}/>      
        </Tabs>
      </AppBar>
      </React.Fragment>

  );
}