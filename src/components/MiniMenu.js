import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import firebase from "../firebase.js"
import { withRouter } from "react-router-dom";

class MiniMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} to='/' component={Link}>Home</MenuItem>
          <MenuItem onClick={this.handleClose} to='/shows' component={Link}>DJ Shows</MenuItem>
          <MenuItem onClick={this.handleClose} to='/schedule' component={Link} >Calendar</MenuItem>
          <MenuItem onClick={this.handleClose} to='/contact' component={Link}>Contact</MenuItem>
          <MenuItem onClick={this.handleClose} to='/login' component={Link}>Login</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withRouter(MiniMenu);