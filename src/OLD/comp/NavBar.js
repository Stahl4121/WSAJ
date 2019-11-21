import Home from './Home.js';
import Schedule from './Schedule.js';
import DJShows from './DJShows.js';
import ContactsPage from './ContactsPage.js';
import { Link, Route } from 'react-router-dom';
import '../compCSS/NavBar.css';
import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';



class Navbar extends React.Component {
    render() {
       return (
        <React.Fragment>
           
            <ul>
                <li> <h1>WSAJ      </h1></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shows">DJ Shows</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/contact">Contact Info</Link></li>
            </ul>
            {/* <AppBar>
                <Toolbar>
                    <div>
                        <Typography variant="h6" noWrap >
                            WSAJ 91.1
                        </Typography>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shows">DJ Shows</Link></li>
                        <li><Link to="/schedule">Schedule</Link></li>
                        <li><Link to="/contact">Contact Info</Link></li>
                    </ul>
                </Toolbar>
            </AppBar> */}

            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/shows" component={DJShows}/>
            <Route exact={true} path="/schedule" component={Schedule}/>
            <Route exact={true} path="/contact" component={ContactsPage}/>
        </React.Fragment>
       )
    }
  }
  
  export default Navbar;