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

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      var auth = "";
      var db = firebase.firestore();

      //Set state auth based on user
      if (user) {
        //If user exists in the adminAccounts table
        db.collection("adminAccounts").where("email", "==", user.email).get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if(doc){
                this.setState({ navbar: <AdminNavBar />, user: user, auth: "admin"});
              }
            });
          })
          .catch(function (error) {
            console.log("Error verifying admin status: ", error);
          });
        
        //Logged in but not admin, therefore dj
        if(this.state.auth !== "admin"){


          
          this.setState({ navbar: <DJNavBar />, user: user, auth: "dj"});
        }
      }
      else{
        this.setState({ navbar: <NavBar />, user: user, auth: ""});
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {this.state.navbar}
          <Routes user = {this.state.user} auth={this.state.auth} />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;