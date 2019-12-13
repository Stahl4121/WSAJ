import React from "react";
import 'typeface-roboto';
import './App.css';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./components/Routes.js"
import NavBar from './components/NavBar.js';
import DJNavBar from './components/DJNavBar.js';
import AdminNavBar from './components/AdminNavBar.js';
import firebase from "./firebase.js"

class App extends React.Component {
  state = {
    auth: null,
    user: null,
    navbar: <NavBar />,
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      var auth = "";

      //Set state auth based on user
      if (user) {
        auth = "dj";
      }

      var navbar = <NavBar />;
      navbar = auth === "admin" ? <AdminNavBar /> : navbar;
      navbar = auth === "dj" ? <DJNavBar /> : navbar;

      this.setState({ navbar: navbar, user: user, auth: auth});
    });
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {this.state.navbar}
          <Routes auth={this.state.auth} />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;