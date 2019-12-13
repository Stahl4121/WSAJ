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
import MiniMenu from './components/MiniMenu.js';
import DJMiniMenu from './components/DJMiniMenu.js';
import AdminMiniMenu from './components/AdminMiniMenu.js';
import firebase from "./firebase.js"
import $ from 'jquery';
class App extends React.Component {
  state = {
    auth: null,
    user: null,
    navbar: "",
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      var db = firebase.firestore();
      var regularSizeScreen = true;
      if($(window).width() < 700) {
        regularSizeScreen = false;
      }
      else {
        regularSizeScreen = true;
      }


      if(regularSizeScreen) {
        
        if (user) {
          this.setState({ navbar: <NavBar />, user: user, auth: "badDJ"});
          console.log("AUTHED A USER " + user.email);
          //If user exists in the adminAccounts table
          db.collection("adminAccounts").where("email", "==", user.email).get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                if(doc){
                  this.setState({ navbar: <AdminNavBar />, user: user, auth: "admin"});
                  console.log("AUTHED AN ADMIN " + user.email);
                }
              });
            })
            .catch(function (error) {
              console.log("Error verifying admin status: ", error);
            });
  
            //If dj exists in the shows table with current status
          db.collection("shows").where("emailAddress", "==", user.email).where("status", "==", "current").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if(doc){
                this.setState({ navbar: <DJNavBar />, user: user, auth: "dj"});
              }
            });
          })
          .catch(function (error) {
            console.log("Error verifying dj status: ", error);
          });
        }
        else{
          this.setState({ navbar: <NavBar />, user: user, auth: ""});
        }
      } 
      else {
        if (user) {
          this.setState({ navbar: <MiniMenu />, user: user, auth: "badDJ"});
          console.log("AUTHED A USER " + user.email);
          //If user exists in the adminAccounts table
          db.collection("adminAccounts").where("email", "==", user.email).get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                if(doc){
                  this.setState({ navbar: <AdminMiniMenu />, user: user, auth: "admin"});
                  console.log("AUTHED AN ADMIN " + user.email);
                }
              });
            })
            .catch(function (error) {
              console.log("Error verifying admin status: ", error);
            });
  
            //If dj exists in the shows table with current status
          db.collection("shows").where("emailAddress", "==", user.email).where("status", "==", "current").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if(doc){
                this.setState({ navbar: <DJMiniMenu />, user: user, auth: "dj"});
              }
            });
          })
          .catch(function (error) {
            console.log("Error verifying dj status: ", error);
          });
        }
        else{
          this.setState({ navbar: <NavBar />, user: user, auth: ""});
        }
      }
      //Set state auth based on user
    
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