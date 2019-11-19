import React from 'react';
import '../compCSS/DJShows.css';

class DJShows extends React.Component {
    render() {
       return (
         <div id="dj-shows">
            <div id="dj-card">
               <div id="dj-show-name">
                     <h3>The Hairy Uncle</h3>
               </div>
               <div id="show-picture">
                  <img src="./src/images/18th-cent-group.jpg" alt="Show Picture"/>
               </div>
               <div id="host-members">
                  <h5>Host Members</h5>
                  <p>Uncle Harry</p>
               </div>
               <div id="description">
                  <h5>Description</h5>
                  <p>Harry Uncle brings you the best of the 80s, 90s, and more!! </p>
               </div> 
               <div id="genre">
                     <h5>Genre</h5>
                     <p>Muzak, 80s, 90s</p>
               </div>
               <div id="song-request">
                  <h5>Song Request</h5>
                  <form>
                     <input type="text" name="songRequest" placeholder="Make your request!"/>
                     <input type="submit" value="Submit"/>
                  </form>
               </div>
            </div>
         </div>
       )
    }
  }
  export default DJShows;