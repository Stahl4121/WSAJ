import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from '../screens/HomeScreen.js';
import Schedule from '../screens/CalendarScreen.js';
import DNDCalendarScreen from '../screens/AdminCalendarScreen';
import DJShows from '../screens/DJShowsScreen.js';
import ContactsPage from '../screens/ContactScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import SignUpScreen from '../screens/SignUpScreen.js';
import DJSetsScreen from '../screens/DJSetsScreen.js';
import SubmitShowScreen from '../screens/SubmitShowScreen.js';
import AddSetScreen from '../screens/AddSetScreen.js';
import NotFound from './NotFound.js'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shows" component={DJShows} />
            <Route exact path="/schedule" component={DNDCalendarScreen} />
            <Route exact path="/contact" component={ContactsPage} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/signup" component={SignUpScreen} />
            <Route exact path="/shows/:name" component={DJSetsScreen}/>
            <Route exact path="/request-show" component={SubmitShowScreen}/>
            <Route exact path="/add-set" component={AddSetScreen}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;