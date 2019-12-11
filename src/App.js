import React from "react";
import 'typeface-roboto';
import './App.css';
import NavBar from './components/NavBar.js';
import DJNavBar from './components/DJNavBar.js';
import AdminNavBar from './components/AdminNavBar.js';

function App() {
  var user = "admin";

  if (user == "admin") {
    return (
      <AdminNavBar />
    )
  }
  else if (user == "dj") {
    return (
      <DJNavBar />
    )
  }
  else {
    return (
      <NavBar />
    )
  }

}
export default App;