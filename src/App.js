import React from 'react';
import './App.css';

function App() {
  return (
    <div>
       <ul>
       <li>Home</li>
       <li>DJ Shows</li>
       <li>Schedule</li>
       <li>Contact Info</li>
       </ul>
       {this.props.children}
    </div>
 )
}
export default App;
