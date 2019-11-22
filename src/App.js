import React, { Component } from "react";
import 'typeface-roboto';
import './App.css';
import NavBar from './components/NavBar.js';
import FullWidthGrid from './components/CardGrid';
function App() {
  return (
    <div>
      <NavBar/>
      <FullWidthGrid/>
      <FullWidthGrid/>
    </div> 
  )
}
export default App;