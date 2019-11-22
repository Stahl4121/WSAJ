import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '../screens/HomeScreen.js';
import Schedule from '../screens/CalendarScreen.js';
import DJShows from '../screens/DJShowsScreen.js';
import ContactsPage from '../screens/ContactScreen.js';

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
    <div>
    <div>
    <AppBar className={classes.appBar} title="WSAJ">
      <Tabs className={classes.tabs}>
        <Tab className={classes.tab} label="Home"><Link to="/"/></Tab>
        <Tab className={classes.tab} label="DJ Shows" ><Link to="/shows"/></Tab>
        <Tab className={classes.tab} label="Calendar" ><Link to="/schedule"/></Tab>
        <Tab className={classes.tab} label="Contact" ><Link to="/contact"/></Tab>
        <Tab className={classes.loginTab} icon={<AccountCircle />}  ><Link to="/shows"/></Tab>
        </Tabs>
    </AppBar>
    </div>
    <div>
    <Route exact={true} path="/" component={Home}/>
    <Route exact={true} path="/shows" component={DJShows}/>
    <Route exact={true} path="/schedule" component={Schedule}/>
    <Route exact={true} path="/contact" component={ContactsPage}/>
    </div>
    </div>
  );
}