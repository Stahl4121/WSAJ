import React from 'react';
import 'typeface-roboto';
import './App.css';
import NavBar from './NavBar.js';
import DJCard from './DJCard';

function App() {
  return (
    <div>
      <NavBar/>
      <DJCard/>
      <DJCard/>
    </div> 
  )
}
export default App;