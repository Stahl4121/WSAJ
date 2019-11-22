import React, { Component } from "react";
import 'typeface-roboto';
import './App.css';
import NavBar from './NavBar.js';
import DJCard from './DJCard';
import FullWidthGrid from './CardGrid';
import DisplayDailyCalendar from './DisplayDailyCalendar';
function App() {
  return (
    <div>
      <NavBar/>
      <FullWidthGrid/>
      <FullWidthGrid/>
      <DisplayDailyCalendar/>
    </div> 
  )
}
export default App;