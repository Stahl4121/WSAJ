import React from 'react';
import { Tab } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import firebase from "../firebase.js"
import { withRouter } from "react-router-dom";

class ProfileTabMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null,            
        };
    };


    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    logout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            this.props.history.push('/login');
        }).catch((error) => {
            // An error happened
        });
    }

    render() {
        return (
            <div>
                <Tab className={this.props.classes.loginTab} aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} icon={<AccountCircle />} />
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.logout}>Logout</MenuItem>
                </Menu>
            </div >
        );
    }
}

export default withRouter(ProfileTabMenu);