import React from 'react';
import '../compCSS/DJShows.css';
import Show from './Show.js';

class DJShows extends React.Component {
    render() {
       return (
         <div>
            <Show/>
            <Show/>         
         </div>
       )
    }
  }
  export default DJShows;