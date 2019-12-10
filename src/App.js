import React from "react";
import 'typeface-roboto';
import './App.css';
import NavBar from './components/NavBar.js';
import DJNavBar from './components/DJNavBar.js';
import AdminNavBar from './components/AdminNavBar.js';

function App() {
  var visitor = false;
  var dj = false;
  
  if(visitor) {
    return (
      <NavBar/>
    )
  }
  else if(dj) {
    return (
      <DJNavBar/>
    )
  } 
  else {
    return (
      <AdminNavBar/>
    )
  }
  
}
export default App;