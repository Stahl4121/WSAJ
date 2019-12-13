import React from "react"
import { Switch, Route } from "react-router-dom"
import PrivateRoute from './PrivateRoute';
import Home from '../screens/HomeScreen.js';
import Schedule from '../screens/CalendarScreen.js';
import DNDCalendarScreen from '../screens/AdminCalendarScreen';
import DJShows from '../screens/DJShowsScreen.js';
import ContactsPage from '../screens/ContactScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import SignUpScreen from '../screens/SignUpScreen.js';
import DJSetsScreen from '../screens/DJSetsScreen.js';
import SetsScreen from '../screens/SetsScreen.js';
import AddSetScreen from '../screens/AddSetScreen.js';
import NotFound from './NotFound.js'
import AdminCurrentShowScreen from "../screens/AdminCurrentShowScreen.js";
import AdminShowRequestScreen from "../screens/AdminShowRequestScreen.js";
import ProfileScreen from "../screens/DJProfileScreen.js";
import AdminExecContactScreen from "../screens/AdminExecContactScreen.js";
import AddAnnouncementScreen from "../screens/AddAnnouncementScreen.js";
import BetterAddSetScreen from "../screens/BetterAddSetScreen.js";
import { realpathSync } from "fs";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" 
                    render={(props) => <Home {...props} auth={this.props.auth} />}
                />
                <Route exact path="/shows" component={DJShows} />
                <Route exact path="/schedule" component={Schedule} />
                <Route exact path="/contact" component={ContactsPage} />
                <Route exact path="/login"
                    render={(props) => <LoginScreen {...props} auth={this.props.auth} />}
                />
                <Route exact path="/signup"
                    render={(props) => <SignUpScreen {...props} auth={this.props.auth} />}
                />
                <Route exact path="/shows/:name" component={DJSetsScreen} />
                <Route exact path="/dj/set-history" component={SetsScreen} />
                <PrivateRoute exact path="/shows/:name/add-set"  type="dj" auth={this.props.auth} component={BetterAddSetScreen} />
                <PrivateRoute exact path="/shows/:name/add-set"  type="dj" auth={this.props.auth} component={BetterAddSetScreen} />
                <PrivateRoute exact path="/dj/add-set"  type="dj" auth={this.props.auth} user={this.props.user} component={BetterAddSetScreen} />
                <PrivateRoute exact path="/dj/profile" component={ProfileScreen} user={this.props.user} type="dj" auth={this.props.auth} />
                <PrivateRoute exact path="/admin/schedule" component={DNDCalendarScreen} type="admin" auth={this.props.auth} />
                <PrivateRoute exact path="/admin/current-shows" component={AdminCurrentShowScreen} type="admin" auth={this.props.auth} />
                <PrivateRoute exact path="/admin/current-shows/:name" type="admin" auth={this.props.auth} component={DJSetsScreen} />
                <PrivateRoute exact path="/admin/show-requests" component={AdminShowRequestScreen} type="admin" auth={this.props.auth} />
                <PrivateRoute exact path="/admin/contact" component={AdminExecContactScreen} type="admin" auth={this.props.auth} />
                <PrivateRoute exact path="/admin/add-announcement" component={AddAnnouncementScreen} type="admin" auth={this.props.auth} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;