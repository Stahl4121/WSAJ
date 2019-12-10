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
import SetsScreen from '../screens/SetsScreen.js';
import SubmitShowScreen from '../screens/SubmitShowScreen.js';
import AddSetScreen from '../screens/AddSetScreen.js';
import NotFound from './NotFound.js'
import AdminCurrentShowScreen from "../screens/AdminCurrentShowScreen.js";
import AdminShowRequestScreen from "../screens/AdminShowRequestScreen.js";
import ProfileScreen from "../screens/DJProfileScreen.js";
import AdminExecContactScreen from "../screens/AdminExecContactScreen.js";
import BetterAddSetScreen from "../screens/BetterAddSetScreen.js";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shows" component={DJShows} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/contact" component={ContactsPage} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/signup" component={SignUpScreen} />
            <Route exact path="/shows/:name" component={DJSetsScreen}/>
            <Route exact path="/shows/:name/add-set" component={AddSetScreen}/>
            <Route exact path="/dj/set-history" component={SetsScreen}/>
            <Route exact path="/request-show" component={SubmitShowScreen}/>
            <Route exact path="/dj/add-set" component={BetterAddSetScreen}/>
            <Route exact path="/dj/profile" component={ProfileScreen}/>
            <Route exact path="/admin/schedule" component={DNDCalendarScreen}/>
            <Route exact path="/admin/current-shows" component={AdminCurrentShowScreen}/>
            <Route exact path="/admin/show-requests" component={AdminShowRequestScreen}/>
            <Route exact path="/admin/contact" component={AdminExecContactScreen}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;