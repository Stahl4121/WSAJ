import React from 'react';
import 'typeface-roboto';
import './App.css';
import NavBar from './NavBar.js';
import DJCard from './DJCard';
import FullWidthGrid from './CardGrid';

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