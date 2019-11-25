import React, { Component } from "react";
import 'typeface-roboto';
import './App.css';
import NavBar from './components/NavBar.js';
import FullWidthGrid from './components/CardGrid';
import { Calendar, Views } from 'react-big-calendar'

function App() {
  return (
    <div>
      <NavBar/>
      <FullWidthGrid/>
      <FullWidthGrid/>
      <Calendar
        localizer={localizer}
        defaultDate={new Date(2015, 3, 1)}
        defaultView={Views.AGENDA}
        
      />
    </div> 
  )
}
export default App;