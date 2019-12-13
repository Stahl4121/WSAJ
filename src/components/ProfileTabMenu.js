import React from 'react';
import { Tab } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import firebase from "../firebase.js"
import { withRouter } from "react-router-dom";

function ProfileTabMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            this.props.history.push('/');
          }).catch(function(error) {
            // An error happened.
          });
    }


    return (
        <div>
            <Tab className={props.classes.loginTab} aria-controls="simple-menu"   aria-haspopup="true" onClick={handleClick} icon={<AccountCircle />} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default withRouter(ProfileTabMenu);